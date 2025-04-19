import { Box, Button } from "@mui/material";

export const BackForwardButtons = ({
  onHandleBack,
  onHandleForward,
}: {
  onHandleBack?: () => void;
  onHandleForward?: () => void;
}) => {
  return (
    <Box display="flex" gap={2}>
      {!!onHandleBack && (
        <Button onClick={onHandleBack} variant="contained" color="secondary">
          Назад
        </Button>
      )}
      {!!onHandleForward && (
        <Button onClick={onHandleForward} variant="contained" color="secondary">
          Далее
        </Button>
      )}
    </Box>
  );
};
