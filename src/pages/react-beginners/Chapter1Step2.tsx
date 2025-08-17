import { useState } from "react";
import { useOutletContext } from "react-router";

import { StepContainer } from "./StepContainer";
import { Step1 } from "./Chapter1Step2/Step1";
import { Step2 } from "./Chapter1Step2/Step2";
import { Step3 } from "./Chapter1Step2/Step3";
import { Step4 } from "./Chapter1Step2/Step4";
import { Step5 } from "./Chapter1Step2/Step5";
import { Step6 } from "./Chapter1Step2/Step6";
import { Step7 } from "./Chapter1Step2/Step7";
import { ReactBeginnerContextProps } from "../ReactBeginnerLayout";

export const Chapter1Step2 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { progress, setProgress } =
    useOutletContext<ReactBeginnerContextProps>();

  const handleActiveStep = (step: number) => {
    const newStepName = `chapter-1/step-2-${step + 1}`;
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
      setActiveStep={handleActiveStep}
      checkCompleted={(step) =>
        progress.includes(`chapter-1/step-2-${step + 1}`)
      }
      checkEnabled={(step) =>
        step === 0 || progress.includes(`chapter-1/step-2-${step}`)
      }
      links={[
        { href: "/react-beginners", title: "React.js курс" },
        { href: "/react-beginners/chapter-1", title: "Введение" },
      ]}
    >
      {activeStep === 0 && <Step1 setActiveStep={handleActiveStep} />}
      {activeStep === 1 && <Step2 setActiveStep={handleActiveStep} />}
      {activeStep === 2 && <Step3 setActiveStep={handleActiveStep} />}
      {activeStep === 3 && <Step4 setActiveStep={handleActiveStep} />}
      {activeStep === 4 && <Step5 setActiveStep={handleActiveStep} />}
      {activeStep === 5 && <Step6 setActiveStep={handleActiveStep} />}
      {activeStep === 6 && <Step7 />}
    </StepContainer>
  );
};
