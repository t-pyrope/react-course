import { Typography } from "@mui/material";
import { BackForwardButtons } from "../../../components/BackForwardButtons";
import { CodeEditor } from "../../../components/CodeEditor";

export const Step2 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  return (
    <>
      <Typography>Вот обычный объект из предыдущего урока:</Typography>
      <CodeEditor
        code={`const person = {
  name: "Анастасия Ивановна",
  age: 23,
  isStudent: true
};`}
      />
      <Typography>
        Есть еще два вида объектов, которые мы будем использовать часто.
      </Typography>
      <Typography>
        Первый - <span style={{ fontWeight: "bold" }}>массив</span> (array). Это
        объект, в котором уже определены ярлыки - от 0 до ... То есть это
        упорядоченная структура данных. Массив имеет свои оптимизации и
        преимущества. Выглядит он следующим образом:
      </Typography>
      <CodeEditor
        code={`const persons = ["Анастасия", "Петр", "Влад Цепеш"];`}
      />
      <Typography>
        Второй - <span style={{ fontWeight: "bold" }}>функция</span>. Это
        объект, который способен запустить какое-то действие - например,
        "доставать все штуки из коробки по очереди и покрасить их в зеленый
        цвет", или "отправлять пользователю сообщение каждые 10 минут". Мы
        создаем функцию и потом используем ее. Есть несколько способов создать
        функцию, но давайте в первую очередь научимся создавать функции
        способом, которыми мы их будем создавать в React.js - стрелочные функции
      </Typography>
      <CodeEditor
        code={`const addNameToMessage = (name) => {
  return "Привет, меня зовут " + name;
};

const sayHi = () => {
  // ничего не возвращает (return)
  // а если быть точнее, что когда ничего не возвращает, возвращает "undefined"
  console.log('Say hi');
}`}
      />
      <Typography>Использование функции:</Typography>
      <CodeEditor code={`const message = addNameToMessage("Вася");`} />
      <Typography>
        Если представить функцию <code>addNameToMessage</code> как маленький
        механизм - мы передали туда имя ("Вася"), и она нам вернула (returned)
        сообщение "Привет, меня зовут Вася"
      </Typography>
      <Typography>
        Один из других, наиболее часто используемых способов создания функции:
      </Typography>
      <CodeEditor
        code={`function addNameToMessage(name) {
  return "Привет, меня зовут " + name;
}`}
      />
      <BackForwardButtons
        onHandleForward={() => setActiveStep(2)}
        onHandleBack={() => setActiveStep(0)}
      />
    </>
  );
};
