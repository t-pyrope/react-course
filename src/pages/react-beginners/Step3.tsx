import { useState } from "react";

import { StepContainer } from "./StepContainer";
import { Step3Step1 } from "./Step3/Step3Step1";
import { Step3Step2 } from "./Step3/Step3Step2";
import { Step3Step3 } from "./Step3/Step3Step3";
import { Step3Step4 } from "./Step3/Step3Step4";
import { Step3Step5 } from "./Step3/Step3Step5";

export const Step3 = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <StepContainer
      title="Типы данных"
      steps={[0, 1, 2, 3, 4, 5]}
      activeStep={activeStep}
    >
      {activeStep === 0 && <Step3Step1 setActiveStep={setActiveStep} />}
      {activeStep === 1 && <Step3Step2 setActiveStep={setActiveStep} />}
      {activeStep === 2 && <Step3Step3 setActiveStep={setActiveStep} />}
      {activeStep === 3 && <Step3Step4 setActiveStep={setActiveStep} />}
      {activeStep === 4 && <Step3Step5 setActiveStep={setActiveStep} />}
    </StepContainer>
  );
};
