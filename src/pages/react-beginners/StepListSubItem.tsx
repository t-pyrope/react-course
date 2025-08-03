import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useLocation } from "react-router";

import { Lesson } from "./types";

export const StepListSubItem = ({
  lesson,
  stepPath,
  progress,
}: {
  lesson: Lesson;
  stepPath: string;
  progress: string[];
}) => {
  const { pathname = "" } = useLocation();
  const disabled = !(
    progress.find((path) => path.startsWith(`${stepPath}/${lesson.path}`)) ||
    progress.includes(`${stepPath}/${lesson.path}`)
  );

  const selected =
    !disabled &&
    pathname.startsWith(`/react-beginners/${stepPath}/${lesson.path}`);

  return (
    <ListItem disablePadding>
      <ListItemButton
        sx={{ pl: 4 }}
        href={`/react-beginners/${stepPath}/${lesson.path}`}
        disabled={disabled}
        selected={selected}
      >
        <ListItemText primary={lesson.title} />
      </ListItemButton>
    </ListItem>
  );
};
