import { Box, Button } from "@mui/material";
import { useState } from "react";
import { useOutletContext } from "react-router";

import { BackForwardButtons } from "../../../components/BackForwardButtons";
import { ReactBeginnerContextProps } from "../../ReactBeginnerLayout.tsx";
import { RadioGroupTest } from "../../../components/RadioGroupTest.tsx";

export const Step6Step2 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  const { correctAnswers, setCorrectAnswers } =
    useOutletContext<ReactBeginnerContextProps>();
  const isAlreadyCorrect = correctAnswers.includes("step-6-step-2");

  const [isCorrect, setIsCorrect] = useState<boolean | null>(
    isAlreadyCorrect ? true : null,
  );
  const [value, setValue] = useState<string | undefined>(
    isAlreadyCorrect ? "yes" : undefined,
  );

  const handleCheck = () => {
    const newIsCorrect = value === "yes";
    setIsCorrect(newIsCorrect);

    if (newIsCorrect) {
      setCorrectAnswers([...correctAnswers, "step-6-step-2"]);
    }
  };

  return (
    <>
      <RadioGroupTest
        value={value}
        setValue={setValue}
        isCorrect={isCorrect}
        label="У вас установлен и открыт IDE?"
        options={[
          { value: "yes", label: "Да" },
          { value: "no", label: "Нет" },
        ]}
        name="ide-opened-radio-group"
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
        onHandleForward={() => setActiveStep(2)}
        onHandleBack={() => setActiveStep(0)}
        isForwardDisabled={!isCorrect}
      />
    </>
  );
};
