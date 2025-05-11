import { Typography } from "@mui/material";

import { BackForwardButtons } from "../../../components/BackForwardButtons";

export const Step6Step3 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  return (
    <>
      <Typography>
        Перейдите по ссылке:{" "}
        <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/">
          Node.js - Run JavaScript Everywhere и установите Node.js
        </a>
        , следуя инструкциям
      </Typography>
      <BackForwardButtons
        onHandleForward={() => setActiveStep(3)}
        onHandleBack={() => setActiveStep(1)}
      />
    </>
  );
};
