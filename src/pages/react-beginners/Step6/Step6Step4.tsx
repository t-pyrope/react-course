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

import { BackForwardButtons } from "../../../components/BackForwardButtons";

export const Step6Step4 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [value, setValue] = useState<string>();
  const formId = useId();

  const handleCheck = () => {
    setIsCorrect(value === "yes");
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
          <FormControlLabel value="yes" control={<Radio />} label="Да" />
          <FormControlLabel value="no" control={<Radio />} label="Нет" />
        </RadioGroup>
      </FormControl>
      <Box>
        <Button color="success" variant="contained" onClick={handleCheck}>
          Проверить
        </Button>
      </Box>
      <BackForwardButtons
        href="/react-beginners/step-7"
        onHandleBack={() => setActiveStep(0)}
        isForwardDisabled={!isCorrect}
      />
    </>
  );
};
