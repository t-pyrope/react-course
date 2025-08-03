import {
  alpha,
  LinkProps,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router";

import { StepListSubItem } from "./StepListSubItem";
import { Step } from "./types";

const CustomizedListItemButton = styled(ListItemButton)<LinkProps>(
  ({ theme }) => `
    &.Mui-selected {
      background-color: ${alpha(theme.palette.primary.light, 0.2)};    
    }
`,
);

export const StepListItem = ({
  step,
  progress,
}: {
  step: Step;
  progress: string[];
}) => {
  const { pathname = "" } = useLocation();

  const stepDisabled = !progress.find((path) => path.startsWith(step.path));
  const stepSelected =
    !stepDisabled && pathname.startsWith(`/react-beginners/${step.path}`);

  return (
    <ListItem disablePadding sx={{ flexDirection: "column" }}>
      <CustomizedListItemButton
        href={`/react-beginners/${step.path}`}
        sx={{ width: "100%" }}
        disabled={stepDisabled}
        selected={stepSelected}
      >
        <ListItemText primary={step.label} />
      </CustomizedListItemButton>
      <List disablePadding sx={{ width: "100%" }}>
        {step.lessons.map((lesson) => (
          <StepListSubItem
            key={lesson.path}
            lesson={lesson}
            stepPath={step.path}
            progress={progress}
          />
        ))}
      </List>
    </ListItem>
  );
};
