import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Grid, Paper } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

import { SortableItem } from "./SortableItem";

interface Question {
  text: string;
  correctAnswerId: number;
}

interface Answer {
  text: string;
  id: number;
}

export const DragAndDropTest = ({
  questions,
  answers,
  selectedAnswers,
  setSelectedAnswers,
  isDisabled,
}: {
  questions: Question[];
  answers: Answer[];
  selectedAnswers: number[];
  setSelectedAnswers: Dispatch<SetStateAction<Array<number>>>;
  isDisabled: boolean;
}) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );
  const items: Answer[] = [];

  for (const selectedAnswerId of selectedAnswers) {
    const item = answers.find((answer) => answer.id === selectedAnswerId);
    if (item) items.push(item);
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setSelectedAnswers((ids) => {
        const oldIndex = ids.indexOf(+active.id);
        const newIndex = ids.indexOf(+over.id);

        return arrayMove(ids, oldIndex, newIndex);
      });
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid size={6} sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {questions.map((q) => (
          <Paper
            key={q.text}
            sx={{
              p: 2,
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
            variant="outlined"
          >
            {q.text}
          </Paper>
        ))}
      </Grid>
      <Grid size={6} sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={items} strategy={verticalListSortingStrategy}>
            {items.map((item) => (
              <SortableItem key={item.id} {...item} disabled={isDisabled} />
            ))}
          </SortableContext>
        </DndContext>
      </Grid>
    </Grid>
  );
};
