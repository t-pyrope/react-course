import { Button, Stack } from "@mui/material";
import { KeyboardDoubleArrowRight } from "@mui/icons-material";

export const SectionFinished = ({
  href,
  sectionName,
}: {
  href: string;
  sectionName: string;
}) => {
  return (
    <Stack flexDirection="column" alignItems="center" py={3}>
      <h2>Поздравляем! 👏</h2>
      <h3>Вы завершили секцию "{sectionName}"</h3>
      <Button
        href={href}
        endIcon={<KeyboardDoubleArrowRight />}
        color="success"
        variant="contained"
      >
        Начать следующую секцию
      </Button>
    </Stack>
  );
};
