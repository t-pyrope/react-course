import { Alert, Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

import { BackForwardButtons } from "../../../components/BackForwardButtons.tsx";

export const Step3Step6 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  const [value, setValue] = useState("");
  const [isCorrect, setIsCorrect] = useState<null | false | true>(null);

  const handleCheck = () => {
    setIsCorrect(value.trim() === "function");
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
