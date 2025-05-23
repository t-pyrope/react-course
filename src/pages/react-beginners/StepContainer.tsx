import { Paper, Step, StepButton, Stepper, Typography } from "@mui/material";
import { ReactNode } from "react";

export const StepContainer = ({
  title,
  children,
  steps,
  activeStep,
  checkCompleted,
  checkEnabled,
  setActiveStep,
}: {
  title: string;
  children: ReactNode;
  steps: number[];
  activeStep: number;
  checkCompleted?: (step: number) => boolean;
  checkEnabled?: (step: number) => boolean;
  setActiveStep?: (step: number) => void;
}) => {
  return (
    <Paper
      variant="outlined"
      sx={{
        p: 2,
        gap: 2,
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        m: 2,
      }}
    >
      <Typography variant="h3" component="h2">
        {title}
      </Typography>
      {steps.length > 1 && !!checkCompleted && !!setActiveStep && (
        <Stepper
          sx={{ marginLeft: "-8px" }}
          color="secondary"
          activeStep={activeStep}
        >
          {steps.map((label) => {
            const completed = checkCompleted(label);
            const enabled = checkEnabled?.(label) ?? false;

            return (
              <Step key={label} completed={completed}>
                <StepButton
                  disabled={!enabled}
                  onClick={() => setActiveStep(label)}
                  aria-label={`Шаг ${label + 1}`}
                />
              </Step>
            );
          })}
        </Stepper>
      )}
      {children}
    </Paper>
  );
};
