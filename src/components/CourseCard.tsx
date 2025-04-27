import {
  Box,
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
      sx={{ display: "flex", width: "100%" }}
      variant="elevation"
      elevation={0}
    >
      <CardMedia
        component="img"
        sx={{ width: 220, height: "100%", borderRadius: 2 }}
        image={src}
        alt={alt}
      />
      <Box sx={{ display: "flex", flexDirection: "column", pl: 1 }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography
            component="h3"
            variant="h5"
            sx={{ marginBlockEnd: "2px" }}
          >
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary", fontSize: "0.9rem" }}
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
      </Box>
    </Card>
  );
};
