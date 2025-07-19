import { Typography } from "@mui/material";

import { CodePreview } from "../../../components/CodePreview";
import { CodeEditor } from "../../../components/CodeEditor";
import { BackForwardButtons } from "../../../components/BackForwardButtons";

const UNCORRECT_STATE_CHANGE_CODE = `() => {
  let buttonText = 'Done';

  const handleClick = () => {
    buttonText = buttonText === 'Done' ? 'Not done' : 'Done';
  }

  return (
    <button onClick={handleClick}>{buttonText}</button>
  )
}`;

const CORRECT_STATE_CHANGE_CODE = `() => {
  const [buttonText, setButtonText] = React.useState("Done");

  const handleClick = () => {
    const nextButtonText = buttonText === "Done" ? "Not done" : "Done";
    setButtonText(nextButtonText);
  };

  return (
    <button onClick={handleClick}>{buttonText}</button>
  );
};`;

export const Step4 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  return (
    <>
      <Typography>
        Представим ситуацию - мы хотим создать такую кнопку, нажатие на которую
        будет менять текст с "Сделано" на "Не сделано" и наоборот. Ранее мы
        говорили о том, что в React.js такие изменения происходят таким образом,
        что мы меняем значение переменных, и React.js сам вырисовывает
      </Typography>
      <Typography>
        Но есть загвозка - это должны быть особенные переменные, помеченные
        React.js, что они должны повести к перерисовке экрана с обновленным
        значением переменной (перерисовка вообще - очень дорогая операция,
        которую мы будем стараться минимизировать по максимуму)
      </Typography>
      <Typography>
        То есть следующий вариант работать НЕ будет (после нажатия кнопки ничего
        не перерисуется):
      </Typography>
      <div
        style={{ display: "grid", gridTemplateColumns: "48% 48%", gap: "4px" }}
      >
        <CodeEditor code={`const MyButton = ${UNCORRECT_STATE_CHANGE_CODE}`} />
        <CodePreview code={UNCORRECT_STATE_CHANGE_CODE} />
      </div>

      <Typography>
        Особенные переменные - это переменные, созданные с помощью React хуков.
      </Typography>
      <Typography>
        Хуки - это функции, предоставленные React.js, для работы с состоянием
        приложения (данными приложения, которые меняются в зависимости от
        действий пользователя). Чаще всего вы, скорее всего, будете менять
        переменные с помощью хука <code>useState</code>
      </Typography>
      <Typography>
        Т.е. React.js будет отслеживать изменения переменных, которые вы
        сделаете с помощью хука <code>useState</code> и весь компонент{" "}
        <code>MyButton</code> будет обновлен. Все обычные переменные будут так
        же созданы заново. Значения переменных, созданных с помощью хуков, будут
        обновлены.
      </Typography>

      <Typography>
        Код <code>MyButton</code>, который заработает благодаря изменению
        переменной с помощью useState, будет выглядеть следующим образом:
      </Typography>

      <div
        style={{ display: "grid", gridTemplateColumns: "48% 48%", gap: "4px" }}
      >
        <CodeEditor code={`const MyButton = ${CORRECT_STATE_CHANGE_CODE}`} />
        <CodePreview code={CORRECT_STATE_CHANGE_CODE} />
      </div>

      <Typography>
        Можно увидеть, что содержимое кнопки стало меняться в ответ на клик
      </Typography>
      <BackForwardButtons
        onHandleForward={() => setActiveStep(4)}
        onHandleBack={() => setActiveStep(2)}
      />
    </>
  );
};
