import { Box, Button } from "@mui/material";

export const BackForwardButtons = ({
  onHandleBack,
  onHandleForward,
  isForwardDisabled = false,
  href,
}: {
  onHandleBack?: () => void;
  onHandleForward?: () => void;
  isForwardDisabled?: boolean;
  href?: string;
}) => {
  return (
    <Box display="flex" gap={2}>
      {!!onHandleBack && (
        <Button onClick={onHandleBack} variant="contained" color="secondary">
          Назад
        </Button>
      )}
      {(!!onHandleForward || href) && (
        <Button
          onClick={onHandleForward}
          variant="contained"
          color="secondary"
          disabled={isForwardDisabled}
          href={href}
        >
          Далее
        </Button>
      )}
    </Box>
  );
};
