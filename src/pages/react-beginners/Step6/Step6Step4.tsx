import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useOutletContext } from "react-router";

import { BackForwardButtons } from "../../../components/BackForwardButtons";
import { ReactBeginnerContextProps } from "../../ReactBeginnerLayout";
import { RadioGroupTest } from "../../../components/RadioGroupTest.tsx";

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

      <RadioGroupTest
        setValue={setValue}
        isCorrect={isCorrect}
        label="Вы видите установленную версию Node.js?"
        options={[
          { value: "yes", label: "Да" },
          { value: "no", label: "Нет" },
        ]}
        name="see-downloaded-node-js"
        value={value}
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
        href="/react-beginners/chapter-2/step-3"
        onHandleBack={() => setActiveStep(0)}
        isForwardDisabled={!isCorrect}
      />
    </>
  );
};
