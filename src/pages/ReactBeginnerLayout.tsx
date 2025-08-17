import { Box, Drawer, List, ListSubheader, Toolbar } from "@mui/material";
import { Outlet, useLocation } from "react-router";
import { useState } from "react";

import { StepListItem } from "./react-beginners/StepListItem";
import { Step } from "./react-beginners/types";
import { StepNotOpened } from "./react-beginners/StepNotOpened.tsx";

export interface ReactBeginnerContextProps {
  progress: string[];
  setProgress: (newProgress: string[]) => void;
  correctAnswers: string[];
  setCorrectAnswers: (newAnswers: string[]) => void;
}

const steps: Step[] = [
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
  const { pathname } = useLocation();

  const sortedSteps = progress.sort((a, b) => a.localeCompare(b));
  const biggestStep =
    sortedSteps[sortedSteps.length - 1]?.match(/.+?step-\d+/)?.[0] ??
    "chapter-1";
  const currentStep = pathname.replace(/\/react-beginners\//, "");

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
            <StepListItem step={step} progress={progress} key={step.path} />
          ))}
        </List>
      </Drawer>
      {progress.find((step) => step.includes(currentStep)) ? (
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
      ) : (
        <StepNotOpened biggestStep={biggestStep} />
      )}
    </Box>
  );
};
