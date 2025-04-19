import { DndContext, DragEndEvent, UniqueIdentifier } from "@dnd-kit/core";
import { Grid, Paper } from "@mui/material";
import { useState } from "react";

import { Draggable } from "./Draggable";
import { Droppable } from "./Droppable";

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
}: {
  questions: Question[];
  answers: Answer[];
}) => {
  const containers = answers.map((answer) => answer.id + "A");
  const [parent, setParent] = useState<UniqueIdentifier | null>(null);
  const draggableMarkup = <Draggable id="111">Drag me</Draggable>;

  const handleDragEnd = (event: DragEndEvent) => {
    const { over } = event;
    setParent(over ? over.id : null);
  };

  return (
    <Grid container spacing={2}>
      <Grid size={6} sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        {questions.map((q) => (
          <Paper key={q.text} sx={{ p: 2 }} variant="outlined">
            {q.text}
          </Paper>
        ))}
      </Grid>
      <Grid size={6}>
        <DndContext onDragEnd={handleDragEnd}>
          {parent === null ? draggableMarkup : null}

          {containers.map((id) => (
            <Droppable key={id} id={id}>
              {parent === id ? draggableMarkup : "Drop here"}
            </Droppable>
          ))}
        </DndContext>
      </Grid>
    </Grid>
  );
};
