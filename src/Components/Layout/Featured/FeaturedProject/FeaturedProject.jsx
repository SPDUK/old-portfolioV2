import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  cardgutter: {
    textAlign: 'center'
  },
  cardbutton: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
};

function Featured(props) {
  const { classes, image, title, link } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardgutter}>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardbutton}>
          <a href={link}>
            <Button
              size="medium"
              variant="secondary"
              color="primaryText"
              className="card-button"
            >
              Learn More <i className="fas fa-arrow-right card-arrow" />
            </Button>
          </a>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(Featured);
