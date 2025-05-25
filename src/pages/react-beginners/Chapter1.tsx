import { Typography } from "@mui/material";

import { BackForwardButtons } from "../../components/BackForwardButtons";
import { StepContainer } from "./StepContainer";

export const Chapter1 = () => {
  return (
    <StepContainer
      title="Введение"
      steps={[0]}
      activeStep={0}
      links={[{ href: "/react-beginners", title: "React.js курс" }]}
    >
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
      <BackForwardButtons href="/react-beginners/chapter-1/step-1" />
    </StepContainer>
  );
};
