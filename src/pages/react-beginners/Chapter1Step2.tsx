import { useState } from "react";
import { useOutletContext } from "react-router";

import { StepContainer } from "./StepContainer";
import { Step2Step1 } from "./Step2/Step2Step1";
import { Step2Step2 } from "./Step2/Step2Step2";
import { Step2Step3 } from "./Step2/Step2Step3";
import { Step2Step4 } from "./Step2/Step2Step4";
import { Step2Step5 } from "./Step2/Step2Step5";
import { Step2Step6 } from "./Step2/Step2Step6";
import { StepNotOpened } from "./StepNotOpened";
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

  if (!progress.find((step) => step.startsWith("chapter-1/step-2"))) {
    return <StepNotOpened />;
  }

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
      {activeStep === 0 && <Step2Step1 setActiveStep={handleActiveStep} />}
      {activeStep === 1 && <Step2Step2 setActiveStep={handleActiveStep} />}
      {activeStep === 2 && <Step2Step3 setActiveStep={handleActiveStep} />}
      {activeStep === 3 && <Step2Step4 setActiveStep={handleActiveStep} />}
      {activeStep === 4 && <Step2Step5 setActiveStep={handleActiveStep} />}
      {activeStep === 5 && <Step2Step6 setActiveStep={handleActiveStep} />}
    </StepContainer>
  );
};
