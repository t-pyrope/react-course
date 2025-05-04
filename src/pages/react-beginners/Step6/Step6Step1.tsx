import { Typography } from "@mui/material";

import { BackForwardButtons } from "../../../components/BackForwardButtons";

export const Step6Step1 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  return (
    <>
      <Typography>
        Если у вас нет IDE (редактора кода), пожалуйста, установите одно из
        следующих:
      </Typography>
      <Typography>Самые популярные бесплатные:</Typography>
      <ol>
        <li>
          <a
            href="https://code.visualstudio.com/download"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visual Studio Code
          </a>
          , VS Code - скриншоты будут по ней
        </li>
        <li>
          <a href="https://www.sublimetext.com/">Sublime Text</a>
        </li>
      </ol>
      <Typography>Некоторые популярные платные:</Typography>
      <ol>
        <li>
          <a href="https://www.jetbrains.com/webstorm/">WebStorm</a>
        </li>
      </ol>
      <Typography>Откройте IDE. Должно выглядеть как-то так:</Typography>
      <img
        src="/vscode.png"
        alt="vscode"
        style={{ width: "100%", maxWidth: 900 }}
      />
      <BackForwardButtons onHandleForward={() => setActiveStep(1)} />
    </>
  );
};
