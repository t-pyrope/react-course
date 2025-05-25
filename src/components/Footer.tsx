import { Typography } from "@mui/material";

export const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Typography sx={{ pt: 4, pb: 2 }}>
        Курсы по программированию для начинающих
      </Typography>
    </footer>
  );
};
