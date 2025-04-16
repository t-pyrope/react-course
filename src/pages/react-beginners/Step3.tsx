import { Box, Button, Typography } from "@mui/material";
import { themes } from "prism-react-renderer";
import { useState } from "react";
import { LiveEditor, LiveProvider } from "react-live";

import { StepContainer } from "./StepContainer.tsx";

export const Step3 = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <StepContainer
      title="Типы данных"
      steps={[0, 1, 2, 3, 4, 5]}
      activeStep={activeStep}
    >
      {activeStep === 0 && (
        <>
          <Typography>
            Представим, что мы составляем механизм, который мы сможем запустить
            и он облегчит жизнь другим людям или сделает их жизнь приятней. Этот
            механизм - и есть наше веб-приложение
          </Typography>
          <Typography>
            Для составления механизма нам нужна коробка с деталями. В это
            коробке лежат разные детали, с которыми можно выполнять разные
            штуки. Эти штуки разделяются на разные группы. Со штуками в одних
            группах можно выполнять похожие действия
          </Typography>
          <Typography>
            Группы - это типы данных. Всего в JavaScript есть несколько типов
            данных. Наиболее часто мы будем использовать следущие типы:
          </Typography>
          <ol>
            <li>Строки: "Иван", "Ваш заказ оформлен"</li>
            <li>
              Числа: 485 (без кавычек записываются, если записать в кавычках,
              будет уже строка)
            </li>
            <li>Логические значения: true, false</li>
            <li>
              Объекты: сложный тип данных, похожий на коробку или собранный
              механизм внутри нашей коробки
            </li>
          </ol>
          <Typography>
            Так как наша коробка - виртуальная, то мы можем дать штукам ярлыки и
            когда мы будем использовать эти ярлыки, в реальности будут
            использоваться штуки, на которые эти ярлыки ссылаются. Давайте
            создадим дадим ярлык какой-нибудь штуке-строке. Есть 2 способа
            сделать это:
          </Typography>
          <LiveProvider
            theme={themes.vsLight}
            code={`// переменная (а если корректнее, то константа), значение нельзя менять.\n// Этот вариант создания переменной будет использоваться почти всегда в React.js\nconst someName = "Анастасия Ивановна";\n\n// "let" - переменная, значение которой можно менять
let otherName = "Петр Владиславович";\n\n// вот каким образом меняется ее значение:\notherName = "Артур Романович";`}
          >
            <LiveEditor disabled />
          </LiveProvider>
          <Typography>
            <code>const</code> - это указатель для языка "сейчас мы будем давать
            этому ярлыку такое-то значение"
          </Typography>
          <Typography>
            Давайте создадим переменные числа и логические значения:
          </Typography>
          <LiveProvider
            theme={themes.vsLight}
            code={`const age = 23;\nconst isStudent = true;`}
          >
            <LiveEditor disabled />
          </LiveProvider>
          <Typography>
            Объекты выглядят посложней. Давайте попробуем создать объект,
            содержащий в себе всю информацию, которую мы создали ранее
          </Typography>
          <LiveProvider
            theme={themes.vsLight}
            code={`const person = {
  name: "Анастасия Ивановна",
  age: 23,
  isStudent: true
};`}
          >
            <LiveEditor disabled />
          </LiveProvider>
          <Typography>
            Или же пустой объект (пустая коробка в нашей коробке)
          </Typography>
          <LiveProvider theme={themes.vsLight} code={`const emptyObject = {};`}>
            <LiveEditor disabled />
          </LiveProvider>
          <Typography>
            Преимущество объекта - содержит всю информацию в одном месте (в
            одном ярлыке). В принципе, 50/50 и так и так будем использовать
            (простые и сложные типы данных)
          </Typography>
          <Box>
            <Button
              onClick={() => setActiveStep(1)}
              variant="contained"
              color="secondary"
            >
              Далее
            </Button>
          </Box>
        </>
      )}
    </StepContainer>
  );
};
