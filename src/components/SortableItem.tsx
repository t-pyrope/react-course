import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Paper } from "@mui/material";
import { DragIndicator } from "@mui/icons-material";

export const SortableItem = ({
  id,
  text,
  disabled,
}: {
  id: number;
  text: string;
  disabled: boolean;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    setActivatorNodeRef,
  } = useSortable({ id, disabled });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: disabled ? undefined : "grab",
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <Paper
        sx={{
          p: 2,
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
        variant="outlined"
        ref={setActivatorNodeRef}
      >
        <DragIndicator fontSize="small" />
        {text}
      </Paper>
    </div>
  );
};
