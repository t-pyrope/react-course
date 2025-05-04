import { useEffect } from "react";
import { useOutletContext } from "react-router";

import { StepContainer } from "./StepContainer";
import { StepNotOpened } from "./StepNotOpened";
import { BackForwardButtons } from "../../components/BackForwardButtons";
import { ReactBeginnerContextProps } from "../ReactBeginnerLayout";

export const Step5 = () => {
  const { progress, setProgress } =
    useOutletContext<ReactBeginnerContextProps>();
  const isStepEnabled = progress.includes("step-5");

  useEffect(() => {
    if (isStepEnabled && !progress.includes("step-6-1")) {
      setProgress([...progress, "step-6-1"]);
    }
  }, [isStepEnabled, progress, setProgress]);

  if (!isStepEnabled) {
    return <StepNotOpened />;
  }

  return (
    <StepContainer title="Полезные ссылки" steps={[0]} activeStep={0}>
      <ol>
        <li>
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React: The library for web and native user interfaces
          </a>{" "}
          - документация React.js. Понятно, с примерами написана
        </li>
        <li>
          <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer">
            Vite.js | Next Generation Frontend Tooling
          </a>{" "}
          (документация) - будем использовать его для создания приложения на
          React.js. Он дает минимальную настройку React.js
        </li>
        <li>
          <a
            href="https://mui.com/material-ui/getting-started/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Material UI - Overview
          </a>{" "}
          - будем использовать их компоненты, чтобы особо не заморачиваться с
          HTML, CSS. Его также используют во многих коммерческих проектах
        </li>
      </ol>
      <BackForwardButtons href="/react-beginners/step-6" />
    </StepContainer>
  );
};
