import { Stack, Typography } from "@mui/material";
import { Outlet } from "react-router";
import { BackForwardButtons } from "../components/BackForwardButtons.tsx";

export const ReactBeginnersPage = () => {
  return (
    <Stack direction="column" spacing={2}>
      <Outlet />
      <Typography variant="h3" component="h2" sx={{ pt: 3 }}>
        Курс React.js с нуля
      </Typography>
      <Stack spacing={1}>
        <Typography>
          В этом курсе вы поверхностно освоите JavaScript и React.js. Вы также
          напишете небольшой проект с использованием Vite.js, Material UI и The
          Easiest Weather API
        </Typography>
        <Typography sx={{ fontWeight: "bold", fontStyle: "italic" }}>
          Курс находится в разработке и будет меняться
        </Typography>
      </Stack>
      <BackForwardButtons href="/react-beginners/step-1" forwardText="Начать" />
    </Stack>
  );
};
