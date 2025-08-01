import { Typography } from "@mui/material";

import { BackForwardButtons } from "../../../components/BackForwardButtons";
import { CodeEditorWithPreview } from "../../../components/CodeEditorWithPreview";

export const Step3 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  return (
    <>
      <Typography>Давайте попробуем поработать с переменными</Typography>
      <Typography>
        Попробуйте изменить значение <code>buttonText</code> на любое другое
        простое значение. Возможно даже, изменить имя самой переменной{" "}
        <code>buttonText</code> (например, на <code>mySuperButtonText</code>) -
        но не забудьте при этом обновить имя при ее вызове (на третьей строке)
      </Typography>
      <CodeEditorWithPreview
        code={`() => {
  const buttonText = "Like";
  return <button>{buttonText}</button>;
}`}
      />
      <Typography>
        Пока что не обращайте внимания на <code>{`() => {`}</code> в первой и{" "}
        <code>{`}`}</code> в последней строке кода. Если кратко, то все дело в
        том, что я использую пакет "react-live" (вы будете постоянно
        использовать пакеты в React, которые решают какие-то задачи, на которые
        у вас бы ушли недели и месяцы). Этот пакет позволяет одновременно
        изменять код и отображать изменения на экране.
      </Typography>
      <Typography>
        Для того, чтобы все заработало, нужно вот так передать значение
        (стрелочную функцию, которые мы разбирали в прошлом шаге), и код пакета
        присвоит его переменной и сделает все, что нам нужно
      </Typography>
      <BackForwardButtons
        onHandleForward={() => setActiveStep(3)}
        onHandleBack={() => setActiveStep(1)}
      />
    </>
  );
};
