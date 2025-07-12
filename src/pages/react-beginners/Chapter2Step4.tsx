import { useState } from "react";
import { useOutletContext } from "react-router";

import { ReactBeginnerContextProps } from "../ReactBeginnerLayout";
import { StepContainer } from "./StepContainer";
import { StepNotOpened } from "./StepNotOpened";
import { Step1 } from "./Chapter2Step4/Step1";
import { Step2 } from "./Chapter2Step4/Step2";

export const Chapter2Step4 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { progress, setProgress } =
    useOutletContext<ReactBeginnerContextProps>();

  const handleActiveStep = (step: number) => {
    const newStepName = `chapter-2/step-4-${step + 1}`;
    if (!progress.includes(newStepName)) {
      setProgress([...progress, newStepName]);
    }
    setActiveStep(step);
    window.scrollTo(0, 0);
  };

  if (!progress.find((step) => step.startsWith("chapter-2/step-4"))) {
    return <StepNotOpened />;
  }

  return (
    <StepContainer
      title="Компоненты React.js"
      steps={[0, 1, 2, 3, 4]}
      activeStep={activeStep}
      setActiveStep={handleActiveStep}
      checkEnabled={() => true}
      checkCompleted={(step) =>
        step === 0 || progress.includes(`chapter-2/step-4-${step + 1}`)
      }
      links={[
        { href: "/react-beginners", title: "React.js курс" },
        {
          href: "/react-beginners/chapter-2",
          title: "Начинаем изучать React.js",
        },
      ]}
    >
      {activeStep === 0 && <Step1 setActiveStep={handleActiveStep} />}
      {activeStep === 1 && <Step2 setActiveStep={handleActiveStep} />}
    </StepContainer>
  );
};
