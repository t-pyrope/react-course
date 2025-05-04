import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useOutletContext } from "react-router";

import { BackForwardButtons } from "../../../components/BackForwardButtons";
import { ReactBeginnerContextProps } from "../../ReactBeginnerLayout";

export const Step3Step6 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  const [value, setValue] = useState("");
  const [isCorrect, setIsCorrect] = useState<null | false | true>(null);
  const { progress, setProgress } =
    useOutletContext<ReactBeginnerContextProps>();

  const handleCheck = () => {
    const newIsCorrect = value.trim() === "function";
    setIsCorrect(newIsCorrect);

    if (newIsCorrect && !progress.includes("step-4-1")) {
      setProgress([...progress, "step-4-1"]);
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
        onChange={(e) => setValue(e.target.value)}
      />
      <Box>
        <Button color="success" variant="contained" onClick={handleCheck}>
          Проверить
        </Button>
      </Box>

      <BackForwardButtons
        onHandleBack={() => setActiveStep(4)}
        isForwardDisabled={!isCorrect}
        href="/react-beginners/step-4"
      />
    </>
  );
};
