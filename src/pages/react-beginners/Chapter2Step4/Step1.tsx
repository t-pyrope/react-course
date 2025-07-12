import { Typography } from "@mui/material";

import { BackForwardButtons } from "../../../components/BackForwardButtons";

export const Step1 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  return (
    <>
      <Typography>
        В React.js мы пишем компоненты и составляем из них страницу. Эти
        компоненты имеют состояния, которые при изменении меняют то, что
        отображаются. Например - когда пользователь нажимает на кнопку
        "Проверить", запускается проверка задания и, если она произошла
        правильно, то отображается галочка. Вот пример компонентов:
      </Typography>
      <img
        src="/mui-components.png"
        alt="Главная страница Material UI, разные части страницы (например, кнопка, карточка), выделены мной красным цветом"
        style={{ width: "100%", maxWidth: 900 }}
      />
      <BackForwardButtons onHandleForward={() => setActiveStep(1)} />
    </>
  );
};
