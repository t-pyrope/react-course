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
}

const steps: { label: string; lessons: { title: string; path: string }[] }[] = [
  {
    label: "Знакомство с JavaScript",
    lessons: [
      { title: "Введение", path: "step-1" },
      { title: "Полезные ссылки", path: "step-2" },
      { title: "Типы данных", path: "step-3" },
      { title: "Некоторые операции", path: "step-4" },
    ],
  },
  {
    label: "Начинаем изучать React.js",
    lessons: [
      { title: "Полезные ссылки", path: "step-5" },
      { title: "Установка окружения", path: "step-6" },
      { title: "Создаем тестовый проект", path: "step-7" },
      { title: "Компоненты React.js", path: "step-8" },
      { title: "Material UI", path: "step-9" },
    ],
  },
];

export const ReactBeginnerLayout = () => {
  const [progress, setProgress] = useState<string[]>(() => {
    const currentProgress = localStorage.getItem("progress");

    return currentProgress ? JSON.parse(currentProgress) : ["step-1"];
  });

  const handleSetProgress = (newProgress: string[]) => {
    setProgress(newProgress);
    localStorage.setItem("progress", JSON.stringify(newProgress));
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
              <ListItemText primary={step.label} />
              <List>
                {step.lessons.map((lesson) => (
                  <ListItemButton
                    sx={{ pl: 4 }}
                    key={lesson.title}
                    href={`/react-beginners/${lesson.path}`}
                    disabled={
                      !(
                        progress.find((path) => path.startsWith(lesson.path)) ||
                        progress.includes(lesson.path)
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
            progress,
            setProgress: handleSetProgress,
          } satisfies ReactBeginnerContextProps
        }
      />
    </Box>
  );
};
