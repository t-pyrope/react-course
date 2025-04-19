import { Paper, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { ReactNode } from "react";

export const StepContainer = ({
  title,
  children,
  steps,
  activeStep,
}: {
  title: string;
  children: ReactNode;
  steps: number[];
  activeStep: number;
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
      {steps.length > 1 && (
        <Stepper
          sx={{ marginLeft: "-8px" }}
          color="secondary"
          activeStep={activeStep}
        >
          {steps.map((label) => {
            return (
              <Step key={label} completed>
                <StepLabel />
              </Step>
            );
          })}
        </Stepper>
      )}
      {children}
    </Paper>
  );
};
