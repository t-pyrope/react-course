import { Typography } from "@mui/material";
import { BackForwardButtons } from "../../../components/BackForwardButtons.tsx";

export const Step5 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  return (
    <>
      <Typography>
        Добавим эту кнопку в наш проект. Создадим файл "MyButton.tsx" в папке
        src проекта
      </Typography>
      <img
        src="/create-MyButton.gif"
        alt="Создание в проекте в папке src файла MyButton.tsx"
        style={{ width: "100%", maxWidth: 300 }}
      />
      <Typography>
        Добавим компонент с предыдущей страницы и экспортируем его с помощью
        директивы "export", чтобы его можно было импортировать в других файлах и
        использовать в других компонентах
      </Typography>

      <img
        src="/vite-MyButton.png"
        alt="Содержимое файла MyButton.tsx"
        style={{ width: "100%", maxWidth: 900 }}
      />

      <Typography>
        Импортируем и отрендерим его в компоненте <code>App.tsx</code>, запустим
        локальный сервер
      </Typography>
      <img
        src="/vite-import-MyButton.png"
        alt="IDE с открытым файлом App.tsx, куда импортируется и рендерится компонент MyButton"
        style={{ width: "100%", maxWidth: 900 }}
      />
      <Typography>Откроем страницу</Typography>
      <img
        src="/vite-Click-me.png"
        alt="Открытая вкладка в браузере, где в центре страницы отображается кнопка 'Click me!'"
        style={{ width: "100%", maxWidth: 900 }}
      />
      <BackForwardButtons onHandleBack={() => setActiveStep(3)} />
    </>
  );
};
