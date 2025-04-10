import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import {Outlet} from "react-router";

const steps: { label: string; descriptions: string[] }[] = [
  {
    label: "Знакомство с JavaScript",
    descriptions: [
      "Введение",
      "Полезные ссылки",
      "Типы данных",
      "Некоторые операции",
    ],
  },
  {
    label: "Начинаем изучать React.js",
    descriptions: [
      "Полезные ссылки",
      "Установка окружения",
      "Создаем проект",
      "Компоненты React.js",
      "Material UI",
    ],
  },
];

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
        <Button variant="contained" color="secondary" href="/react-beginners/step-1">
          Начать
        </Button>
      </Box>
      <Box sx={{ pt: 2 }}>
        <Typography variant="h4" component="h3">
          Содержание
        </Typography>
        <List sx={{ padding: 0 }}>
          {steps.map((step) => (
            <ListItem key={step.label}>
              <ListItemText
                primary={step.label}
                secondary={
                  <Stack>
                    {step.descriptions.map((description, index) => (
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: "text.primary", display: "inline" }}
                      >
                        {index + 1}. {description}
                      </Typography>
                    ))}
                  </Stack>
                }
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Stack>
  );
};
