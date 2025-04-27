import { StepContainer } from "./StepContainer.tsx";
import { useState } from "react";
import { useOutletContext } from "react-router";

import { ReactBeginnerContextProps } from "../ReactBeginnerLayout";
import { Step4Step1 } from "./Step4/Step4Step1";
import { Step4Step2 } from "./Step4/Step4Step2";

export const Step4 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { progress, setProgress } =
    useOutletContext<ReactBeginnerContextProps>();

  const handleActiveStep = (step: number) => {
    const newStepName = `step-4-${step + 1}`;
    if (!progress.includes(newStepName)) {
      setProgress([...progress, newStepName]);
    }
    setActiveStep(step);
    window.scrollTo(0, 0);
  };

  return (
    <StepContainer
      title="Некоторые операции"
      steps={[0, 1]}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      checkCompleted={(step) => progress.includes(`step-4-${step + 1}`)}
    >
      {activeStep === 0 && <Step4Step1 setActiveStep={handleActiveStep} />}
      {activeStep === 1 && <Step4Step2 setActiveStep={handleActiveStep} />}
    </StepContainer>
  );
};
