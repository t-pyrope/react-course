import { UniqueIdentifier, useDroppable } from "@dnd-kit/core";
import { ReactNode } from "react";

export const Droppable = ({
  children,
  id,
}: {
  children: ReactNode;
  id: UniqueIdentifier;
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  const style = {
    color: isOver ? "green" : undefined,
    height: 58,
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
};
