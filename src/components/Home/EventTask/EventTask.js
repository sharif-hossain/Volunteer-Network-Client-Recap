import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: 300,
    borderRadius:'10px',
  },
  media: {
    height: 220,
  },
  text: {
    textAlign: 'center',
     height: 100,
     backgroundColor: 'lightPurple',
  },
});

const EventTask = ({task, handleClick}) => {

  const classes = useStyles();

  return (
    <div className="col-lg-3 col-md-6  mb-4">
        
      <Card className={classes.root} onClick={()=>handleClick(task._id)}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`data:image/png;base64,${task.image.img}`}
            title="Contemplative Reptile"
          />
          <CardContent className={classes.text}>
            <Typography gutterBottom variant="h6" component="h2">
              {task.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default EventTask;
