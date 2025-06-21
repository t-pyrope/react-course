import {
  Alert,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useId, useState } from "react";
import { useOutletContext } from "react-router";

import { BackForwardButtons } from "../../../components/BackForwardButtons";
import { ReactBeginnerContextProps } from "../../ReactBeginnerLayout.tsx";

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
  const formId = useId();

  const handleCheck = () => {
    const newIsCorrect = value === "yes";
    setIsCorrect(newIsCorrect);

    if (newIsCorrect) {
      setCorrectAnswers([...correctAnswers, "step-6-step-2"]);
    }
  };

  return (
    <>
      {isCorrect === false && (
        <Alert severity="error">
          Некоторые ответы неверны, пожалуйста, попробуйте еще раз
        </Alert>
      )}
      {isCorrect && <Alert severity="success">Все верно!</Alert>}
      <FormControl>
        <FormLabel id={formId}>У вас установлен и открыт IDE?</FormLabel>
        <RadioGroup
          aria-labelledby={formId}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name="radio-buttons-group"
        >
          <FormControlLabel
            value="yes"
            control={<Radio />}
            label="Да"
            disabled={!!isCorrect}
          />
          <FormControlLabel
            value="no"
            control={<Radio />}
            label="Нет"
            disabled={!!isCorrect}
          />
        </RadioGroup>
      </FormControl>
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
