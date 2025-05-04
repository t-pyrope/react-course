import { useState } from "react";
import { useOutletContext } from "react-router";

import { ReactBeginnerContextProps } from "../ReactBeginnerLayout";
import { StepContainer } from "./StepContainer";
import { Step6Step1 } from "./Step6/Step6Step1";
import { Step6Step2 } from "./Step6/Step6Step2";

export const Step6 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { progress, setProgress } =
    useOutletContext<ReactBeginnerContextProps>();

  const handleActiveStep = (step: number) => {
    const newStepName = `step-6-${step + 1}`;
    if (!progress.includes(newStepName)) {
      setProgress([...progress, newStepName]);
    }
    setActiveStep(step);
    window.scrollTo(0, 0);
  };

  return (
    <StepContainer
      title="Установка окружения"
      steps={[0, 1]}
      activeStep={activeStep}
      setActiveStep={handleActiveStep}
      checkEnabled={() => true}
      checkCompleted={(step) => step === 0 || progress.includes(`step-6-${step + 1}`)}
    >
      {activeStep === 0 && <Step6Step1 setActiveStep={handleActiveStep} />}
      {activeStep === 1 && <Step6Step2 setActiveStep={handleActiveStep} />}
    </StepContainer>
  );
};
