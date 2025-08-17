import { useState } from "react";
import { useOutletContext } from "react-router";

import { ReactBeginnerContextProps } from "../ReactBeginnerLayout";
import { StepContainer } from "./StepContainer";
import { Step4Step1 } from "./Step3/Step4Step1";
import { Step4Step2 } from "./Step3/Step4Step2";

export const Chapter1Step3 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { progress, setProgress } =
    useOutletContext<ReactBeginnerContextProps>();

  const handleActiveStep = (step: number) => {
    const newStepName = `chapter-1/step-3-${step + 1}`;
    if (!progress.includes(newStepName)) {
      const newProgress = [...progress, newStepName];

      if (step === 1 && !progress.includes("chapter-2/step-1")) {
        newProgress.push("chapter-2/step-1");
      }

      setProgress(newProgress);
    }

    setActiveStep(step);
    window.scrollTo(0, 0);
  };

  return (
    <StepContainer
      title="Некоторые операции"
      steps={[0, 1]}
      activeStep={activeStep}
      setActiveStep={handleActiveStep}
      checkCompleted={(step) => progress.includes(`chapter-1/step-3-${step + 1}`)}
      checkEnabled={(step) => step === 0 || progress.includes(`chapter-1/step-3-${step}`)}
      links={[
        { href: "/react-beginners", title: "React.js курс" },
        { href: "/react-beginners/chapter-1", title: "Введение" },
      ]}
    >
      {activeStep === 0 && <Step4Step1 setActiveStep={handleActiveStep} />}
      {activeStep === 1 && <Step4Step2 setActiveStep={handleActiveStep} />}
    </StepContainer>
  );
};
