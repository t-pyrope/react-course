import { StepContainer } from "./StepContainer.tsx";
import { Typography } from "@mui/material";

import {BackForwardButtons} from "../../components/BackForwardButtons";

export const Chapter2 = () => {
  return (
    <StepContainer
      title="Начинаем изучать React.js"
      steps={[0]}
      activeStep={0}
      links={[{ href: "/react-beginners", title: "React.js курс" }]}
    >
      <Typography>
        React.js - это библиотека на JavaScript, в которой очень много чего
        настроено и можно (относительно) легко и быстро разрабатывать
        веб-приложения (программы, которые работают в браузере)
      </Typography>
      <BackForwardButtons href="/react-beginners/chapter-2/step-1" />
    </StepContainer>
  );
};
