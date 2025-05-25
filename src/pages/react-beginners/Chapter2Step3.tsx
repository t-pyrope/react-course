import { useState } from "react";
import { useOutletContext } from "react-router";

import { ReactBeginnerContextProps } from "../ReactBeginnerLayout";
import { StepContainer } from "./StepContainer";
import { Step7Step1 } from "./Step7/Step7Step1";
import { Step7Step2 } from "./Step7/Step7Step2";
import { Step7Step3 } from "./Step7/Step7Step3";
import { Step7Step4 } from "./Step7/Step7Step4";

export const Chapter2Step3 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { progress, setProgress } =
    useOutletContext<ReactBeginnerContextProps>();

  const handleActiveStep = (step: number) => {
    const newStepName = `chapter-2/step-3-${step + 1}`;
    if (!progress.includes(newStepName)) {
      setProgress([...progress, newStepName]);
    }
    setActiveStep(step);
    window.scrollTo(0, 0);
  };

  return (
    <StepContainer
      title="Создаем тестовый проект"
      steps={[0, 1, 2, 3]}
      activeStep={activeStep}
      setActiveStep={handleActiveStep}
      checkEnabled={() => true}
      checkCompleted={(step) =>
        step === 0 || progress.includes(`chapter-2/step-3-${step + 1}`)
      }
      links={[
        { href: "/react-beginners", title: "React.js курс" },
        {
          href: "/react-beginners/chapter-2",
          title: "Начинаем изучать React.js",
        },
      ]}
    >
      {activeStep === 0 && <Step7Step1 setActiveStep={handleActiveStep} />}
      {activeStep === 1 && <Step7Step2 setActiveStep={handleActiveStep} />}
      {activeStep === 2 && <Step7Step3 setActiveStep={handleActiveStep} />}
      {activeStep === 3 && <Step7Step4 />}
    </StepContainer>
  );
};
