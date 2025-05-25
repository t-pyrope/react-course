import { Alert, Box, Button, Typography } from "@mui/material";
import { useState } from "react";

import { DragAndDropTest } from "../../../components/DragAndDropTest";
import { BackForwardButtons } from "../../../components/BackForwardButtons";

export const Step2Step5 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  const questions = [
    { text: `Number.isFinite("The Godfather")`, correctAnswerId: 3 },
    { text: `Array.isArray(["Bob", "Dorothy"])`, correctAnswerId: 1 },
    { text: `typeof "Hello, world!"`, correctAnswerId: 0 },
    { text: `typeof 1000`, correctAnswerId: 4 },
    { text: `typeof {}`, correctAnswerId: 2 },
  ];
  const answers = [
    { text: `"string"`, id: 0 },
    { text: "true", id: 1 },
    { text: `"object"`, id: 2 },
    { text: "false", id: 3 },
    { text: `"number"`, id: 4 },
  ];

  const [isCorrect, setIsCorrect] = useState<null | false | true>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(() => {
    return answers.map((answer) => answer.id);
  });

  const handleCheck = () => {
    if (questions.every((q, i) => q.correctAnswerId === selectedAnswers[i])) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <>
      <Typography>Что возвращают следующие проверки?</Typography>
      {isCorrect === false && (
        <Alert severity="error">
          Некоторые ответы неверны, пожалуйста, попробуйте еще раз
        </Alert>
      )}
      {isCorrect && <Alert severity="success">Все верно!</Alert>}
      <DragAndDropTest
        answers={answers}
        questions={questions}
        setSelectedAnswers={setSelectedAnswers}
        selectedAnswers={selectedAnswers}
        isDisabled={!!isCorrect}
      />
      <Box>
        <Button color="success" variant="contained" onClick={handleCheck}>
          Проверить
        </Button>
      </Box>
      <BackForwardButtons
        onHandleForward={() => setActiveStep(5)}
        onHandleBack={() => setActiveStep(3)}
        isForwardDisabled={!isCorrect}
      />
    </>
  );
};
