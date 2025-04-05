import "./App.css";
import { NavLink } from "react-router";

function App() {
  return (
    <>
      <h1>Курс React.js с нуля</h1>
      <p>Привет! Перед вами один из многочисленных курсов по React.js с нуля</p>
      <p>В этом курсе вы поверхностно освоите JavaScript, React</p>
      <p>
        Вы также напишете небольшой проект с использованием Vite.js, Material UI
        и The Easiest Weather API
      </p>
      <p>Этот курс находится в разработке и может изменяться</p>
      <NavLink to="/structure">Начать</NavLink>
    </>
  );
}

export default App;
