import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

export const CourseCard = ({
  src,
  alt,
  title,
  descriptions,
  srcSource,
  srcAuthor,
  href,
}: {
  src: string;
  alt: string;
  title: string;
  descriptions: string[];
  srcSource: string;
  srcAuthor: string;
  href: string;
}) => {
  return (
    <Card sx={{ display: "flex" }} variant="outlined">
      <CardMedia component="img" sx={{ width: 151 }} image={src} alt={alt} />
      <Box sx={{ display: "flex", flexDirection: "column", p: 1 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="h3" variant="h5" sx={{ mb: 1 }}>
            {title}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
            <a href={srcSource} target="_blank" rel="noopener noreferrer">
              Автор фотографии: {srcAuthor} (ссылка на pexels.com)
            </a>
          </Typography>
          {descriptions.map((description) => (
            <Typography>{description}</Typography>
          ))}
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <Button href={href} variant="contained" color="secondary">
            Начать
          </Button>
        </Box>
      </Box>
    </Card>
  );
};
