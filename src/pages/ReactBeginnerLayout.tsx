import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Toolbar,
} from "@mui/material";
import { Outlet } from "react-router";
import { useState } from "react";

export interface ReactBeginnerContextProps {
  progress: string[];
  setProgress: (newProgress: string[]) => void;
  correctAnswers: string[];
  setCorrectAnswers: (newAnswers: string[]) => void;
}

const steps: {
  label: string;
  path: string;
  lessons: { title: string; path: string }[];
}[] = [
  {
    label: "Введение",
    path: "chapter-1",
    lessons: [
      { title: "Полезные ссылки", path: "step-1" },
      { title: "Типы данных", path: "step-2" },
      { title: "Некоторые операции", path: "step-3" },
    ],
  },
  {
    label: "Начинаем изучать React.js",
    path: "chapter-2",
    lessons: [
      { title: "Полезные ссылки", path: "step-1" },
      { title: "Установка окружения", path: "step-2" },
      { title: "Создаем тестовый проект", path: "step-3" },
      { title: "Компоненты React.js", path: "step-4" },
      { title: "Material UI", path: "step-5" },
    ],
  },
];

export const ReactBeginnerLayout = () => {
  const [progress, setProgress] = useState<string[]>(() => {
    const currentProgress = localStorage.getItem("progress");

    return currentProgress ? JSON.parse(currentProgress) : ["chapter-1/step-1"];
  });
  const [correctAnswers, setCorrectAnswers] = useState<string[]>(() => {
    const currentAnswers = localStorage.getItem("answers");

    return currentAnswers ? JSON.parse(currentAnswers) : [];
  });

  const handleSetProgress = (newProgress: string[]) => {
    setProgress(newProgress);
    localStorage.setItem("progress", JSON.stringify(newProgress));
  };

  const handleSetCorrectAnswers = (newAnswers: string[]) => {
    setCorrectAnswers(newAnswers);
    localStorage.setItem("answers", JSON.stringify(newAnswers));
  };

  return (
    <Box display="flex">
      <Drawer
        variant="persistent"
        anchor="left"
        open
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List
          sx={{ width: "100%" }}
          subheader={<ListSubheader>Содержание</ListSubheader>}
        >
          {steps.map((step) => (
            <ListItem
              key={step.label}
              disablePadding
              sx={{ flexDirection: "column" }}
            >
              <ListItemButton
                href={`/react-beginners/${step.path}`}
                sx={{ width: "100%" }}
                disabled={!progress.find((path) => path.startsWith(step.path))}
              >
                <ListItemText primary={step.label} />
              </ListItemButton>
              <List>
                {step.lessons.map((lesson) => (
                  <ListItemButton
                    sx={{ pl: 4 }}
                    key={lesson.title}
                    href={`/react-beginners/${step.path}/${lesson.path}`}
                    disabled={
                      !(
                        progress.find((path) =>
                          path.startsWith(`${step.path}/${lesson.path}`),
                        ) || progress.includes(`${step.path}/${lesson.path}`)
                      )
                    }
                  >
                    <ListItemText primary={lesson.title} />
                  </ListItemButton>
                ))}
              </List>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Outlet
        context={
          {
            correctAnswers,
            setCorrectAnswers: handleSetCorrectAnswers,
            progress,
            setProgress: handleSetProgress,
          } satisfies ReactBeginnerContextProps
        }
      />
    </Box>
  );
};
