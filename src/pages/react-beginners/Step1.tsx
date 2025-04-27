import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useOutletContext } from "react-router";

import { StepContainer } from "./StepContainer.tsx";
import { ReactBeginnerContextProps } from "../ReactBeginnerLayout";
import { BackForwardButtons } from "../../components/BackForwardButtons";

export const Step1 = () => {
  const { progress, setProgress } =
    useOutletContext<ReactBeginnerContextProps>();

  useEffect(() => {
    if (!progress.includes("step-2")) {
      setProgress([...progress, "step-2"]);
    }
  }, [progress, setProgress]);

  return (
    <StepContainer title="Введение" steps={[0]} activeStep={0}>
      <Typography>
        React.js - это библиотека на JavaScript, в которой очень много чего
        настроено и можно (относительно) легко и быстро разрабатывать
        веб-приложения (программы, которые работают в браузере)
      </Typography>
      <Typography>
        JavaScript - это язык программирования. С помощью него можно писать
        инструкции, которые (после некоторых преобразований) понимает и
        исполняет компьютер
      </Typography>
      <Typography>
        В этом модуле мы быстро пройдемся по основным возможностям JavaScript,
        которые будем применять в разработке на этом курсе. После небольшого
        блока теории будут ссылки для дополнительного изучения и тесты (не
        включающие в себя материал из ссылок)
      </Typography>
      <BackForwardButtons href="/react-beginners/step-2" />
    </StepContainer>
  );
};
