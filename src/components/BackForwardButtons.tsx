import { Box, Button } from "@mui/material";

export const BackForwardButtons = ({
  onHandleBack,
  onHandleForward,
  isForwardDisabled = false,
  href,
  forwardText = "Далее",
}: {
  onHandleBack?: () => void;
  onHandleForward?: () => void;
  isForwardDisabled?: boolean;
  href?: string;
  forwardText?: string;
}) => {
  return (
    <Box display="flex" gap={2} sx={{ pt: 4 }}>
      {!!onHandleBack && (
        <Button onClick={onHandleBack} variant="contained">
          Назад
        </Button>
      )}
      {(!!onHandleForward || href) && (
        <Button
          onClick={onHandleForward}
          variant="contained"
          disabled={isForwardDisabled}
          href={href}
        >
          {forwardText}
        </Button>
      )}
    </Box>
  );
};
