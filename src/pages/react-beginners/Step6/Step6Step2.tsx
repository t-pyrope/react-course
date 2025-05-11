import {
  Alert,
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useId, useState } from "react";

import { BackForwardButtons } from "../../../components/BackForwardButtons";

export const Step6Step2 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [value, setValue] = useState<string>();
  const formId = useId();

  const handleCheck = () => {
    setIsCorrect(value === "yes");
  };

  return (
    <>
      {isCorrect === false && (
        <Alert severity="error">
          Некоторые ответы неверны, пожалуйста, попробуйте еще раз
        </Alert>
      )}
      {isCorrect && <Alert severity="success">Все верно!</Alert>}
      <FormControl>
        <FormLabel id={formId}>У вас установлен и открыт IDE?</FormLabel>
        <RadioGroup
          aria-labelledby={formId}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name="radio-buttons-group"
        >
          <FormControlLabel value="yes" control={<Radio />} label="Да" />
          <FormControlLabel value="no" control={<Radio />} label="Нет" />
        </RadioGroup>
      </FormControl>
      <Box>
        <Button color="success" variant="contained" onClick={handleCheck}>
          Проверить
        </Button>
      </Box>
      <BackForwardButtons
        onHandleForward={() => setActiveStep(2)}
        onHandleBack={() => setActiveStep(0)}
        isForwardDisabled={!isCorrect}
      />
    </>
  );
};
