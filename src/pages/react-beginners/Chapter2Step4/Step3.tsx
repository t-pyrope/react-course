import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useOutletContext } from "react-router";

import { CodeEditor } from "../../../components/CodeEditor";
import { BackForwardButtons } from "../../../components/BackForwardButtons";
import { RadioGroupTest } from "../../../components/RadioGroupTest";
import { ReactBeginnerContextProps } from "../../ReactBeginnerLayout";

export const Step3 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  const { correctAnswers, setCorrectAnswers } =
    useOutletContext<ReactBeginnerContextProps>();
  const isAlreadyCorrect = correctAnswers.includes("chapter-2-step-3");

  const [isCorrect, setIsCorrect] = useState<boolean | null>(
    isAlreadyCorrect ? true : null,
  );
  const [value, setValue] = useState<string | undefined>(
    isAlreadyCorrect ? "yes" : undefined,
  );

  const handleCheck = () => {
    const newIsCorrect = value === "function";
    setIsCorrect(newIsCorrect);

    if (newIsCorrect) {
      setCorrectAnswers([...correctAnswers, "chapter-2-step-3"]);
    }
  };

  return (
    <>
      <CodeEditor
        code={`const MyButton = () => {
  const handleClick = () => {};

  return (
    <button onClick={handleClick}>Click Me!</button>
  )
}`}
      />

      <RadioGroupTest
        setValue={setValue}
        isCorrect={isCorrect}
        label={
          <>
            Что вернет <code>typeof MyButton?</code>
          </>
        }
        options={[
          { value: "boolean", label: '"boolean"' },
          { value: "object", label: '"object"' },
          { value: "string", label: '"string"' },
          { value: "function", label: '"function"' },
          { value: "number", label: '"number"' },
        ]}
        name="typeof-my-button"
      />
      <Box>
        <Button
          color="success"
          variant="contained"
          onClick={handleCheck}
          disabled={!!isCorrect}
        >
          Проверить
        </Button>
      </Box>
      <BackForwardButtons
        isForwardDisabled={!isCorrect}
        onHandleBack={() => setActiveStep(1)}
        onHandleForward={() => setActiveStep(3)}
      />
    </>
  );
};
