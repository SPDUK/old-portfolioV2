import React from 'react';
import LazyLoad from 'react-lazyload';
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
  },
  cardDescription: {
    minHeight: '72px',
  }
};

function Featured(props) {
  const { classes, image, title, link, description } = props;
  return (
    <div>
      <Card className={classes.card}>
        <LazyLoad height={500} offset={200} once>
          <CardMedia className={classes.media} image={image} title={title} />
        </LazyLoad>
        <CardContent className={classes.cardgutter}>
          <Typography gutterBottom variant="headline" component="h2">
            {title}
          </Typography>
          <Typography
            className={classes.cardDescription}
            gutterBottom
            variant="subheading"
            component="h5"
          >
            {description}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardbutton}>
          <a href={link}>
            <Button size="medium" className="card-button">
              Visit Site <i className="fas fa-arrow-right card-arrow" />
            </Button>
          </a>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(Featured);
