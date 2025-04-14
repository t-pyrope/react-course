import { Box, Breadcrumbs, Link, Paper, Typography } from "@mui/material";

export const Step1 = () => {
  return (
    <Box sx={{ margin: "0 auto", width: 800 }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography sx={{ color: "text.primary" }}>Breadcrumbs</Typography>
      </Breadcrumbs>
      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography>
          React.js - это библиотека на JavaScript, в которой очень много чего
          настроено и можно (относительно) легко и быстро разрабатывать
          веб-приложения (программы, которые работают в браузере)
        </Typography>
        <Typography>
          JavaScript - это язык программирования. С помощью него можно писать
          инструкции, которые (после некоторых преобразований) понимает и
          исполняет компьютер В этом модуле мы быстро пройдемся по основным
          возможностям JavaScript, которые будем применять в разработке на этом
          курсе. После небольшого блока теории будут ссылки для дополнительного
          изучения и тесты (не включающие в себя материал из ссылок)
        </Typography>
      </Paper>
    </Box>
  );
};
