import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Item.css";
import { Link } from "react-router-dom";
import NavBar from "../navbar/NavBar";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function Item({ item }) {
  const classes = useStyles();

  return (
    <div className="item">
      <Card className={classes.root}>
        <CardActionArea>
          <img src={item.strDrinkThumb} alt="cup of drink" width="100%" />

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.strDrink}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.strInstructions}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link className="link" to={`/singleitem/${item.idDrink}`}>
            <Button size="small" color="primary">
              Learn more
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}
