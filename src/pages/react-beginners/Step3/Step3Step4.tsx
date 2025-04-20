import { Typography } from "@mui/material";
import { BackForwardButtons } from "../../../components/BackForwardButtons.tsx";
import { JustCode } from "../../../components/JustCode.tsx";

export const Step3Step4 = ({
  setActiveStep,
}: {
  setActiveStep: (step: number) => void;
}) => {
  return (
    <>
      <Typography>
        Иногда нам будет необходимо узнать тип переменной. По большей части
        из-за того, что мы будем получать данные откуда-то из сервера (который
        чаще всего будем писать не мы и иметь контроля над ним не будем) и
        отображать на экране. Возможно, что мы получим undefined вместо массива,
        или строку вместо числа (или в некоторых случаях получаем строку, а в
        некоторых - число). И еще мы будем использовать TypeScript (так как его
        сейчас везде требут и он реально облегчает разработку), и если
        непонятно, какого типа переменная, то в определенных случаях он
        отобразит на экране ошибку
      </Typography>
      <Typography>
        Как мы помним, у каждого типа значения есть свои операции, которые с
        ними возможно сделать. Например, в случае чисел, их можно складывать,
        умножать. В строках можно искать подстроки или разделять их на массив
        строк. В случае массивов, можно пройтись по каждому элементу массива,
        изменить его и сохранить все в новый массив
      </Typography>
      <Typography>
        Если попробовать применить операции, специфические для типа, то или
        получим ошибку, или (что, пожалуй хуже) получим результат, который мы
        совсем не ожидаем
      </Typography>
      <Typography>
        Давайте посмотрим, как именно мы можем проверить, что переменная имеет
        тип, с которым нам нужно работать!
      </Typography>
      <Typography>
        Например с помощью оператора <code>typeof</code>
      </Typography>
      <JustCode
        code={`
const someVariableFromServer = "It is string";
typeof someVariableFromServer"; // вернет строку "string"
const anotherVariable = 555;
typeof anotherVariable; // вернет строку "number"
`}
      />
      <Typography>
        JavaScript так же предоставляет встроенные методы для проверки типа.
        Например, мы помним, что массив - это объект, но не все объекты -
        массивы, а если мы хотим на переменной использовать метод именно
        массива, то нам нужно убедиться, что тип переменной - именно массив
      </Typography>
      <JustCode
        code={`Array.isArray([5, 15]); // вернет логическое значение true
const numbersObj = { one : 1, two: 2 };
Array.isArray(numbersObj); // false
const booksCount = 3;
Array.isArray(booksCount) // false`}
      />
      <Typography>
        Проверить, является ли переменная числом, можно с помощью ряда методов:
        Number.isFinite, Number.isNaN (позднее разберем его)
      </Typography>
      <JustCode
        code={`const numString = "1";
Number.isFinite(numString); // вернет false
Number.isFinite(1); // вернет true`}
      />
      <BackForwardButtons
        onHandleBack={() => setActiveStep(2)}
        onHandleForward={() => setActiveStep(4)}
      />
    </>
  );
};
