import { Button, Typography } from "@mui/material";
import { useOutletContext } from "react-router";

import { ReactBeginnerContextProps } from "../ReactBeginnerLayout";
import { StepContainer } from "./StepContainer";

export const StepNotOpened = () => {
  const { progress } = useOutletContext<ReactBeginnerContextProps>();

  const sortedSteps = progress.sort((a, b) => a.localeCompare(b));
  const biggestStep = sortedSteps[sortedSteps.length - 1].split("-")[1];

  return (
    <StepContainer
      title="Шаг еще не открыт"
      steps={[0]}
      activeStep={0}
      links={[]}
    >
      <Typography>Шаг еще не открыт</Typography>
      <Button href={`/react-beginners/step-${biggestStep}`}>
        Вернуться на предыдущий открытый шаг
      </Button>
    </StepContainer>
  );
};
