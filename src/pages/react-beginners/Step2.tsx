import { Typography } from "@mui/material";

import { StepContainer } from "./StepContainer.tsx";
import { useEffect } from "react";
import { useOutletContext } from "react-router";
import { ReactBeginnerContextProps } from "../ReactBeginnerLayout.tsx";
import { BackForwardButtons } from "../../components/BackForwardButtons.tsx";

export const Step2 = () => {
  const { progress, setProgress } =
    useOutletContext<ReactBeginnerContextProps>();

  useEffect(() => {
    if (!progress.includes("step-3-1")) {
      setProgress([...progress, "step-3-1"]);
    }
  }, [progress, setProgress]);

  return (
    <StepContainer title="Полезные ссылки" steps={[0]} activeStep={0}>
      <Typography>
        <a
          href="https://learn.javascript.ru/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Современный учебник JavaScript
        </a>{" "}
        - можно здесь в принципе все учить, это вам очень сильно сэкономит время
        при разработке и поможет писать качественный код
      </Typography>
      <BackForwardButtons href="/react-beginners/step-3" />
    </StepContainer>
  );
};
