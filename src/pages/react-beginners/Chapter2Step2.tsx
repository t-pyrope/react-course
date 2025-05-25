import { useState } from "react";
import { useOutletContext } from "react-router";

import { ReactBeginnerContextProps } from "../ReactBeginnerLayout";
import { StepContainer } from "./StepContainer";
import { Step6Step1 } from "./Step6/Step6Step1";
import { Step6Step2 } from "./Step6/Step6Step2";
import { Step6Step3 } from "./Step6/Step6Step3";
import { Step6Step4 } from "./Step6/Step6Step4";

export const Chapter2Step2 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { progress, setProgress } =
    useOutletContext<ReactBeginnerContextProps>();

  const handleActiveStep = (step: number) => {
    const newStepName = `chapter-2/step-2-${step + 1}`;
    if (!progress.includes(newStepName)) {
      setProgress([...progress, newStepName]);
    }
    setActiveStep(step);
    window.scrollTo(0, 0);
  };

  return (
    <StepContainer
      title="Установка окружения"
      steps={[0, 1, 2, 3]}
      activeStep={activeStep}
      setActiveStep={handleActiveStep}
      checkEnabled={() => true}
      checkCompleted={(step) =>
        step === 0 || progress.includes(`chapter-2/step-2-${step + 1}`)
      }
      links={[
        { href: "/react-beginners", title: "React.js курс" },
        {
          href: "/react-beginners/chapter-2",
          title: "Начинаем изучать React.js",
        },
      ]}
    >
      {activeStep === 0 && <Step6Step1 setActiveStep={handleActiveStep} />}
      {activeStep === 1 && <Step6Step2 setActiveStep={handleActiveStep} />}
      {activeStep === 2 && <Step6Step3 setActiveStep={handleActiveStep} />}
      {activeStep === 3 && <Step6Step4 setActiveStep={handleActiveStep} />}
    </StepContainer>
  );
};
