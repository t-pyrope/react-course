import { Typography } from "@mui/material";
import { BackForwardButtons } from "../../../components/BackForwardButtons.tsx";

export const Step7Step3 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  return (
    <>
      <Typography>
        Давайте запустим приложение в браузере, чтобы, когда мы вносим изменения
        в код, мы могли сразу увидеть их на экране
      </Typography>
      <Typography>
        Введите в терминале <code>npm run dev</code>
      </Typography>
      <img
        src="/vite-npm-run-dev.png"
        alt="Открытый в VS Code терминал с введенной командой npm run dev и результатом команды"
        style={{ width: "100%", maxWidth: 900 }}
      />
      <Typography>
        VS Code запускает приложение на своем сервере на вашем компьютере и к нему теперь можно
        получить доступ через браузер по указанному адресу. Откройте ссылку в
        браузере
      </Typography>
      <img
        src="/vite-browser.png"
        alt="Браузер с запущенным локально приложением"
        style={{ width: "100%", maxWidth: 900 }}
      />
      <BackForwardButtons
        onHandleForward={() => setActiveStep(3)}
        onHandleBack={() => setActiveStep(1)}
      />
    </>
  );
};
