import { Typography } from "@mui/material";

import { CodeEditor } from "../../../components/CodeEditor";
import { BackForwardButtons } from "../../../components/BackForwardButtons";
import { CodePreview } from "../../../components/CodePreview";

const CODE = `() => {
  // Первая часть компонента - логика
  // Т.е. вычисления, которые мы делаем для правильного отображения и работы отображения на экране
  // Здесь у нас только функция, которая вызовется, когда пользователь нажмет на кнопку
  // (в данном случае ничего не произойдет)
  const handleClick = () => {}

  // Вторая часть компонента
  // "return" - это то, что вернет функция (компонент) и отобразит на экране
  // (в данном случае вернет и отобразит кнопку)
  return (
    <button onClick={handleClick}>Click Me!</button>
  )
}`;

export const Step2 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  return (
    <>
      <Typography>
        Вот самый простой вариант, как может выглядеть компонент в React.js
      </Typography>
      <CodeEditor
        code={`// с заглавной буквы
const MyButton = ${CODE}`}
      />

      <Typography>Вырисуется что-то типа этого:</Typography>
      <CodePreview code={CODE} />

      <BackForwardButtons
        onHandleForward={() => setActiveStep(2)}
        onHandleBack={() => setActiveStep(0)}
      />
    </>
  );
};
