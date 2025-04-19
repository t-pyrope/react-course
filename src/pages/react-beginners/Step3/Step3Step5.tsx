import { Typography } from "@mui/material";
import { DragAndDropTest } from "../../../components/DragAndDropTest.tsx";
import { BackForwardButtons } from "../../../components/BackForwardButtons.tsx";

export const Step3Step5 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  return (
    <>
      <Typography>Что возвращают следующие проверки?</Typography>
      <DragAndDropTest
        answers={[
          { text: `"string"`, id: 0 },
          { text: "true", id: 1 },
          { text: `"object"`, id: 2 },
          { text: "false", id: 3 },
          { text: `"number"`, id: 4 },
        ]}
        questions={[
          { text: `Number.isFinite("The Godfather")`, correctAnswerId: 3 },
          { text: `Array.isArray(["Bob", "Dorothy"])`, correctAnswerId: 1 },
          { text: `typeof "Hello, world!"`, correctAnswerId: 0 },
          { text: `typeof 1000`, correctAnswerId: 4 },
          { text: `typeof {}`, correctAnswerId: 2 },
        ]}
      />
      <BackForwardButtons
        onHandleForward={() => setActiveStep(5)}
        onHandleBack={() => setActiveStep(3)}
      />
    </>
  );
};
