import { Box, Button, Stack, Typography } from "@mui/material";
import { Outlet } from "react-router";

export const ReactBeginnersPage = () => {
  return (
    <Stack direction="column" spacing={2}>
      <Outlet />
      <Typography variant="h3" component="h2">
        Курс React.js с нуля
      </Typography>
      <Typography>
        В этом курсе вы поверхностно освоите JavaScript, React.js. Вы также
        напишете небольшой проект с использованием Vite.js, Material UI и The
        Easiest Weather API. Курс находится в разработке и будет меняться
      </Typography>
      <Box>
        <Button
          variant="contained"
          color="secondary"
          href="/react-beginners/step-1"
        >
          Начать
        </Button>
      </Box>
    </Stack>
  );
};
