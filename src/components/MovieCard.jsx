import { Card, CardContent, CardMedia } from "@mui/material";

const MovieCard = ({ id }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image={`https://picsum.photos/1920/900?random=${id}`}
      />
      <CardContent>
        <h2>Movie</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos autem
          iste veritatis velit blanditiis cum saepe. Nam, suscipit omnis?
          Dolores eius modi accusantium nulla deserunt aut velit molestiae
          aliquam natus!
        </p>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
