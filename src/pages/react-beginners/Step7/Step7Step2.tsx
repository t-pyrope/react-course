import { Typography } from "@mui/material";

import { BackForwardButtons } from "../../../components/BackForwardButtons.tsx";

export const Step7Step2 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  return (
    <>
      <Typography>
        Откройте файл "package.json" (double-кликнете по нему)
      </Typography>
      <img
        src="/vite-package-json.png"
        alt="Проект в VS Code с открытым файлом package.json"
        style={{ width: "100%", maxWidth: 900 }}
      />
      <Typography>
        <code>package.json</code> - файл конфигурации нашего проекта. Как мы уже
        сказали ранее, мы будем использовать готовые модули (код, написанный
        другими программистами), чтобы прямо сосредоточиться на написании логики
        и внешнего вида нашего приложения и не тратить месяцы и годы на другие
        необходимые вещи
      </Typography>
      <Typography>
        Сейчас наш проект содержит список с самым необходимым набором таких
        библиотек (сотни мегабайт, которые нужно загрузить из интернета) и мы по
        мере необходимости будем подгружать и устанавливать новые
      </Typography>
      <Typography>
        <code>devDependencies</code> - пакеты, которые нужны только для
        разработки (development dependencies)
      </Typography>
      <Typography>
        <code>dependencies</code> - пакеты, которые нужны для работы приложения
        (production dependencies)
      </Typography>
      <Typography>
        Чтобы скачать модули из этих двух списков, введите в терминале команду{" "}
        <code>npm install</code>
      </Typography>
      <img
        src="/vite-npm-install.gif"
        alt="Установка зависимостей проекта с помощью команды npm install в терминале VS Code"
        style={{ width: "100%", maxWidth: 900 }}
      />
      <Typography>
        В проекте должна появиться папка "node_modules" со скачанными модулями
      </Typography>
      <BackForwardButtons
        onHandleBack={() => setActiveStep(0)}
        onHandleForward={() => setActiveStep(2)}
      />
    </>
  );
};
