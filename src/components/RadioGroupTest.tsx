import {
  Alert,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import {ReactNode, useId} from "react";

export const RadioGroupTest = ({
  value,
  setValue,
  isCorrect,
  label,
  options,
  name,
}: {
  setValue: (val: string) => void;
  isCorrect: boolean | null;
  label: ReactNode;
  options: { value: string; label: string }[];
  name: string;
  value?: string;
}) => {
  const formId = useId();

  return (
    <>
      {isCorrect === false && (
        <Alert severity="error">
          Некоторые ответы неверны, пожалуйста, попробуйте еще раз
        </Alert>
      )}
      {isCorrect && <Alert severity="success">Все верно!</Alert>}
      <FormControl>
        <FormLabel id={formId}>{label}</FormLabel>
        <RadioGroup
          aria-labelledby={formId}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          name={name}
        >
          {options.map(({ value, label }) => (
            <FormControlLabel
              value={value}
              key={value}
              control={<Radio />}
              label={label}
              disabled={!!isCorrect}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </>
  );
};
