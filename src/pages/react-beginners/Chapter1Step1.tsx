import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useOutletContext } from "react-router";

import { StepContainer } from "./StepContainer";
import { StepNotOpened } from "./StepNotOpened";
import { ReactBeginnerContextProps } from "../ReactBeginnerLayout";
import { BackForwardButtons } from "../../components/BackForwardButtons";

export const Chapter1Step1 = () => {
  const { progress, setProgress } =
    useOutletContext<ReactBeginnerContextProps>();

  useEffect(() => {
    if (progress.includes("chapter-1/step-1") && !progress.includes("chapter-1/step-2-1")) {
      setProgress([...progress, "chapter-1/step-2-1"]);
    }
  }, [progress, setProgress]);

  if (!progress.includes("chapter-1/step-1")) {
    return <StepNotOpened />;
  }

  return (
    <StepContainer
      title="Полезные ссылки"
      steps={[0]}
      activeStep={0}
      links={[
        { href: "/react-beginners", title: "React.js курс" },
        { href: "/react-beginners/chapter-1", title: "Введение" },
      ]}
    >
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
      <BackForwardButtons href="/react-beginners/chapter-1/step-2" />
    </StepContainer>
  );
};
