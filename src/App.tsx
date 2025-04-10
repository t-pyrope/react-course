import { Stack, Typography } from "@mui/material";
import { CourseCard } from "./components/CourseCard.tsx";

function App() {
  return (
    <>
      <Typography sx={{ mt: 3, mb: 3 }}>
        Привет! Перед вами платформа с одними из многочисленных курсов по
        React.js, которые вы можете встретить в интернете
      </Typography>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <CourseCard
          src="/react-beginners.jpg"
          alt="Девушка спиной сидит к открытому ноутбуку, видны ее руки на клавиатуре и часть прически. На включенном ноутбуке открыт редактор кода"
          title="Курс React.js с нуля"
          descriptions={[
            "В этом курсе вы поверхностно освоите JavaScript, React",
            "Вы также напишете небольшой проект с использованием Vite.js, Material UI и The Easiest Weather API",
          ]}
          srcSource="https://www.pexels.com/ru-ru/photo/macbook-pro-1181467/"
          srcAuthor="Christina Morillo"
          href="/react-beginners"
        />
      </Stack>
    </>
  );
}

export default App;
