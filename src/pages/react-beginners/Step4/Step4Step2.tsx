import { Typography } from "@mui/material";

import { CodeEditor } from "../../../components/CodeEditor";
import { BackForwardButtons } from "../../../components/BackForwardButtons";

export const Step4Step2 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  return (
    <>
      <Typography>Условное ветвление:</Typography>
      <CodeEditor
        code={[
          `const name = "Виктория";`,
          `const isFemale = true;`,
          `const age = 68;`,
          `let helloWord = "Уважаемый";`,
          "",
          `if (age < 10) {`,
          `  helloWord = "Привет,";`,
          `} else if (isFemale) {`,
          `  helloWord = "Уважаемая";`,
          `} else {`,
          `  // какие-то другие вычисления...`,
          `}`,
        ].join("\n")}
      />
      <Typography>Другой вариант:</Typography>
      <CodeEditor
        code={[
          `const name = "Вика";`,
          `const isFemale = true;`,
          `const helloWord = isFemale ? "Уважаемая" : "Уважаемый";`,
        ].join("\n")}
      />
      <BackForwardButtons
        onHandleBack={() => setActiveStep(0)}
        href="/react-beginners/step-5"
      />
    </>
  );
};
