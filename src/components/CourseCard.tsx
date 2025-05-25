import {
  Button,
  Card,
  CardActions,
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
    <Card
      sx={{
        width: 350,
        boxShadow:
          "0 0 2px 0 rgba(145 158 171 / 0.2), 0 12px 24px -4px rgba(145 158 171 / 0.12)",
      }}
      variant="elevation"
      elevation={0}
    >
      <CardMedia component="img" sx={{ height: 250 }} image={src} alt={alt} />
      <CardContent
        sx={{
          flex: "1 0 auto",
          pb: 2,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography component="h3" variant="h5" sx={{ marginBlockEnd: "2px" }}>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ color: "text.secondary", fontSize: "0.9rem", lineHeight: 2 }}
          component="a"
          href={srcSource}
          target="_blank"
          rel="noopener noreferrer"
        >
          Автор фотографии: {srcAuthor} (ссылка на pexels.com)
        </Typography>
        {descriptions.map((description) => (
          <Typography key={description}>{description}</Typography>
        ))}
      </CardContent>
      <CardActions>
        <Button href={href} sx={{ fontWeight: "bold" }}>
          Начать
        </Button>
      </CardActions>
    </Card>
  );
};
