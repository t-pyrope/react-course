import { useState } from "react";
import { useOutletContext } from "react-router";

import { ReactBeginnerContextProps } from "../ReactBeginnerLayout";
import { StepContainer } from "./StepContainer";
import { Step4Step1 } from "./Step4/Step4Step1";
import { Step4Step2 } from "./Step4/Step4Step2";
import { StepNotOpened } from "./StepNotOpened";

export const Step4 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { progress, setProgress } =
    useOutletContext<ReactBeginnerContextProps>();

  const handleActiveStep = (step: number) => {
    const newStepName = `step-4-${step + 1}`;
    if (!progress.includes(newStepName)) {
      const newProgress = [...progress, newStepName];

      if (step === 1 && !progress.includes("step-5")) {
        newProgress.push("step-5");
      }

      setProgress(newProgress);
    }

    setActiveStep(step);
    window.scrollTo(0, 0);
  };

  if (!progress.find((step) => step.startsWith("step-4"))) {
    return <StepNotOpened />;
  }

  return (
    <StepContainer
      title="Некоторые операции"
      steps={[0, 1]}
      activeStep={activeStep}
      setActiveStep={handleActiveStep}
      checkCompleted={(step) => progress.includes(`step-4-${step + 1}`)}
      checkEnabled={(step) => step === 0 || progress.includes(`step-4-${step}`)}
    >
      {activeStep === 0 && <Step4Step1 setActiveStep={handleActiveStep} />}
      {activeStep === 1 && <Step4Step2 setActiveStep={handleActiveStep} />}
    </StepContainer>
  );
};
