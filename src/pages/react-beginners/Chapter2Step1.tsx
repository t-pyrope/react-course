import { useEffect } from "react";
import { useOutletContext } from "react-router";

import { StepContainer } from "./StepContainer";
import { BackForwardButtons } from "../../components/BackForwardButtons";
import { ReactBeginnerContextProps } from "../ReactBeginnerLayout";

export const Chapter2Step1 = () => {
  const { progress, setProgress } =
    useOutletContext<ReactBeginnerContextProps>();
  const isStepEnabled = progress.includes("chapter-2/step-1");

  useEffect(() => {
    if (isStepEnabled && !progress.includes("chapter-2/step-2-1")) {
      setProgress([...progress, "chapter-2/step-2-1"]);
    }
  }, [isStepEnabled, progress, setProgress]);

  return (
    <StepContainer
      title="Полезные ссылки"
      steps={[0]}
      activeStep={0}
      links={[
        { href: "/react-beginners", title: "React.js курс" },
        {
          href: "/react-beginners/chapter-2",
          title: "Начинаем изучать React.js",
        },
      ]}
    >
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
      </ol>
      <BackForwardButtons href="/react-beginners/chapter-2/step-2" />
    </StepContainer>
  );
};
