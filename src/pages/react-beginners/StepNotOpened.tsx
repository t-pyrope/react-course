import { Button, Typography } from "@mui/material";

import { StepContainer } from "./StepContainer";

export const StepNotOpened = ({ biggestStep }: { biggestStep: string }) => {
  return (
    <StepContainer
      title="Шаг еще не открыт"
      steps={[0]}
      activeStep={0}
      links={[]}
    >
      <Typography>Шаг еще не открыт</Typography>
      <Button href={`/react-beginners/${biggestStep}`}>
        Вернуться на предыдущий открытый шаг
      </Button>
    </StepContainer>
  );
};
