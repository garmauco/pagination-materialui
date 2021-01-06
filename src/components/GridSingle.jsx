import React from 'react'
import { makeStyles, Card, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import InfoTabs from "./InfoTabs"

const useStyles = makeStyles(theme => ({
    item: {
      padding: theme.spacing(1.2)
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    }
  }));

const GridSingle = (props) =>{
    const {id, url, title} = props.albumItem
    const classes = useStyles();
    return(
        <Grid item key={id.toString()} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={url}/>
                <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="body2" color="secondary">
                        {title}
                    </Typography>
                    <Typography  variant="body1">
                        ID: {id.toString()}
                    </Typography>                  
                    <InfoTabs albumItem={props.albumItem}/>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default GridSingle