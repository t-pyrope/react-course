import { Typography } from "@mui/material";

import { CodeEditor } from "../../../components/CodeEditor";
import { BackForwardButtons } from "../../../components/BackForwardButtons";

export const Step4Step1 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  return (
    <>
      <Typography>Действия со строками:</Typography>
      <Typography>
        1. Чтобы склеивать строки, будем использовать следующий синтаксис
        (интерполяцию):
      </Typography>
      <CodeEditor
        code={[
          `const helloWord = "Добро пожаловать";`,
          `const name = "Петя";`,
          ``,
          `const helloMessage = \`\${helloWord}, \${name}\`; // "Добро пожаловать, Петя"`,
        ].join("\n")}
      />
      <Typography>
        2. Операции, возвращающие <code>true</code> или <code>false</code>{" "}
        (пригодятся для условий):
      </Typography>
      <CodeEditor
        code={[
          `const age = 26;`,
          `const universityStreet = "Лермонтова";`,
          `const homeStreet = "Тверская";`,
          `const coffeeShopStreet = "Тверская";`,
          ``,
          `// проверяем на равенство`,
          `const isUniversityOnSameStreetAsHome = universityStreet === homeStreet; // false`,
          `const isCoffeeShopOnSameStreetAsHome = coffeeShopStreet === homeStreet; // true`,
          "",
          `// некоторые из проверок на "больше"/"меньше"`,
          `const isAdult = age > 18; // true`,
          `const isNotRetired = age < 60; // true`,
        ].join("\n")}
      />
      <BackForwardButtons onHandleForward={() => setActiveStep(1)} />
    </>
  );
};
