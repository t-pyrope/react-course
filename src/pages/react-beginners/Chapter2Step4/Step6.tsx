import { Box, Button, Typography } from "@mui/material";

export const Step6 = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          py: 10,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: 5,
        }}
      >
        <Typography fontSize={30}>🎉 Поздравляем! Вы закончили курс</Typography>
        <Button href="/" variant="contained" color="success">
          На главную
        </Button>
      </Box>
    </>
  );
};
