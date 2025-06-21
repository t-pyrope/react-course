import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useOutletContext } from "react-router";

import { BackForwardButtons } from "../../../components/BackForwardButtons";
import { ReactBeginnerContextProps } from "../../ReactBeginnerLayout";

export const Step2Step6 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  const { correctAnswers, setCorrectAnswers, progress, setProgress } =
    useOutletContext<ReactBeginnerContextProps>();
  const isAlreadyCorrect = correctAnswers.includes("step-2-step-6");

  const [value, setValue] = useState(isAlreadyCorrect ? "function" : "");
  const [isCorrect, setIsCorrect] = useState<null | false | true>(
    isAlreadyCorrect ? true : null,
  );

  const handleCheck = () => {
    const newIsCorrect = value.trim() === "function";
    setIsCorrect(newIsCorrect);

    if (newIsCorrect) {
      if (!progress.includes("chapter-1/step-3-1")) {
        setProgress([...progress, "chapter-1/step-3-1"]);
      }
      setCorrectAnswers([...correctAnswers, "step-2-step-6"]);
    }
  };

  return (
    <>
      <Typography>
        Что вернет <code>{`typeof function() {}`}</code>? Введите без кавычек
      </Typography>
      <Typography>(вопрос с подвохом)</Typography>
      {isCorrect === false && (
        <Alert severity="error">
          Неверный ответ, пожалуйста, попробуйте еще раз
        </Alert>
      )}
      {isCorrect && <Alert severity="success">Все верно!</Alert>}
      <TextField
        id="outlined-basic"
        label="Напишите ответ"
        variant="outlined"
        sx={{ width: "400px" }}
        value={value}
        disabled={!!isCorrect}
        onChange={(e) => setValue(e.target.value)}
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
        onHandleBack={() => setActiveStep(4)}
        isForwardDisabled={!isCorrect}
        href="/react-beginners/chapter-1/step-3"
      />
    </>
  );
};
