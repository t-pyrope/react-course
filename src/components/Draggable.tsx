import { UniqueIdentifier, useDraggable } from "@dnd-kit/core";
import { ReactNode } from "react";

export const Draggable = ({
  children,
  id,
}: {
  children: ReactNode;
  id: UniqueIdentifier;
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </button>
  );
};
