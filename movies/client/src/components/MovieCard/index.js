import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FormLabel } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const MovieCard = () => {
  return (
    <Card sx={{ maxWidth: 250, position: "relative" }}>
      <IconButton
        sx={{ position: "absolute", right: 0 }}
        aria-FormLabel="more"
        id="long-button"
        aria-haspopup="true"
      >
        <MoreVertIcon />
      </IconButton>

      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        open={true}
        onClose={() => {}}
        PaperProps={{
          style: {
            width: "20ch",
          },
        }}
      >
        <MenuItem onClick={() => {}}> Add </MenuItem>
      </Menu>
      <CardMedia
        component="img"
        height="250"
        image="https://www.themoviedb.org/t/p/w440_and_h660_face/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" gutterBottom component="div">
          The Northman
        </Typography>
        <Typography variant="subtitle1" gutterBottom component="div">
          Apr 22, 2022
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
