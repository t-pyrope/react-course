import { Stack, Typography } from "@mui/material";
import { Outlet } from "react-router";
import { BackForwardButtons } from "../components/BackForwardButtons.tsx";

export const ReactBeginnersPage = () => {
  return (
    <Stack direction="column" spacing={2}>
      <Outlet />
      <Typography variant="h3" component="h2" sx={{ pt: 3 }}>
        Подготовка к программированию на React.js
      </Typography>
      <Stack spacing={1}>
        <Typography>
          В этом курсе вы поверхностно освоите JavaScript и установите окружение
          для программирования на React.js
        </Typography>
        <Typography sx={{ fontWeight: "bold", fontStyle: "italic" }}>
          Курс находится в разработке и будет меняться
        </Typography>
      </Stack>
      <BackForwardButtons href="/react-beginners/step-1" forwardText="Начать" />
    </Stack>
  );
};
