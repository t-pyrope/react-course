import { useState } from "react";
import { useOutletContext } from "react-router";

import { StepContainer } from "./StepContainer";
import { Step3Step1 } from "./Step3/Step3Step1";
import { Step3Step2 } from "./Step3/Step3Step2";
import { Step3Step3 } from "./Step3/Step3Step3";
import { Step3Step4 } from "./Step3/Step3Step4";
import { Step3Step5 } from "./Step3/Step3Step5";
import { Step3Step6 } from "./Step3/Step3Step6";
import { ReactBeginnerContextProps } from "../ReactBeginnerLayout.tsx";

export const Step3 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { progress, setProgress } =
    useOutletContext<ReactBeginnerContextProps>();

  const handleActiveStep = (step: number) => {
    const newStepName = `step-3-${step + 1}`;
    if (!progress.includes(newStepName)) {
      setProgress([...progress, newStepName]);
    }
    setActiveStep(step);
    window.scrollTo(0, 0);
  };

  return (
    <StepContainer
      title="Типы данных"
      steps={[0, 1, 2, 3, 4, 5]}
      activeStep={activeStep}
      setActiveStep={setActiveStep}
      checkCompleted={(step) => progress.includes(`step-3-${step + 1}`)}
    >
      {activeStep === 0 && <Step3Step1 setActiveStep={handleActiveStep} />}
      {activeStep === 1 && <Step3Step2 setActiveStep={handleActiveStep} />}
      {activeStep === 2 && <Step3Step3 setActiveStep={handleActiveStep} />}
      {activeStep === 3 && <Step3Step4 setActiveStep={handleActiveStep} />}
      {activeStep === 4 && <Step3Step5 setActiveStep={handleActiveStep} />}
      {activeStep === 5 && <Step3Step6 setActiveStep={handleActiveStep} />}
    </StepContainer>
  );
};
