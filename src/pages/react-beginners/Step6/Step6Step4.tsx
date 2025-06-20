import {
  Alert,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useId, useState } from "react";
import { useOutletContext } from "react-router";

import { BackForwardButtons } from "../../../components/BackForwardButtons";
import { ReactBeginnerContextProps } from "../../ReactBeginnerLayout";

export const Step6Step4 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  const { correctAnswers, setCorrectAnswers, progress, setProgress } =
    useOutletContext<ReactBeginnerContextProps>();
  const isAlreadyCorrect = correctAnswers.includes("step-6-step-4");

  const [isCorrect, setIsCorrect] = useState<boolean | null>(
    isAlreadyCorrect ? true : null,
  );
  const [value, setValue] = useState<string>();
  const formId = useId();

  const handleCheck = () => {
    const newIsCorrect = value === "yes";
    setIsCorrect(newIsCorrect);
    if (newIsCorrect) {
      if (!progress.includes("chapter-2/step-3-1")) {
        setProgress([...progress, "chapter-2/step-3-1"]);
      }

      setCorrectAnswers([...correctAnswers, "step-6-step-4"]);
    }
  };

  return (
    <>
      <Typography>
        Проверим, установился ли Node.js. Откройте терминал и введите{" "}
        <code>node -v</code>
      </Typography>
      <Typography>
        Если вы еще не пользуетесь терминалом, можно открыть его в прямо в IDE
      </Typography>
      <Typography>
        Откройте VS Code. Найдите в меню наверху вкладку "Терминал", откройте ее
        и нажмите на "Создать терминал". Как-то так должно выглядеть
      </Typography>
      <img
        src="/open-terminal.png"
        alt={`VS Code с открытой вкладкой в верхнем меню "Терминал" и с наведенной мышкой на пункт меню "Создать терминал"`}
        style={{ width: "100%", maxWidth: 900 }}
      />
      <Typography>Внизу должен появиться терминал</Typography>
      <img
        src="/ide-terminal.png"
        alt={`VS Code с открытым терминалом внизу, который выделен красной обводкой`}
        style={{ width: "100%", maxWidth: 900 }}
      />
      <Typography>
        Введите в нем <code>node -v</code> - команду, которая проверит, если
        Node.js загружен и выведет его версию
      </Typography>
      {isCorrect === false && (
        <Alert severity="error">
          Некоторые ответы неверны, пожалуйста, попробуйте еще раз
        </Alert>
      )}
      {isCorrect && <Alert severity="success">Все верно!</Alert>}
      <FormControl>
        <FormLabel id={formId}>
          Вы видите установленную версию Node.js?
        </FormLabel>
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
        href="/react-beginners/chapter-2/step-3"
        onHandleBack={() => setActiveStep(0)}
        isForwardDisabled={!isCorrect}
      />
    </>
  );
};
