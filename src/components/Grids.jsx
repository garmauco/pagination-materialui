import React from "react";
import { makeStyles, Divider, Box, Card, CardContent, CardMedia, Container, Grid, Typography, Tab, Tabs, AppBar } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import data from '../datos.json'

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  item: {
    padding: theme.spacing(1.2)
  },
  avatar: { marginRight: theme.spacing(5) },
  paginator: {
    justifyContent: "center",
    padding: "10px"
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
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

function TabPanel(props){

  const {children, value, index}=props
  return(
      <div>
          {
              value === index  &&(
                  <h1>{children}</h1>
              )
          }
      </div>
  )
}

const Grids = (props) => {
  const [value, setValue] = React.useState(0);
  const handleTabs=(event, newval) =>{
        setValue(newval)
  }
  var albumList = data
  var totalItem = albumList.length
  if (props.search.length > 0){
    
    albumList = albumList.filter((i) => {
      return i.title.toLowerCase().match(props.search.toLowerCase())
    })
    totalItem = albumList.length
   //console.log(totalItem);
  }
  console.log("Total items: "+totalItem);
  const classes = useStyles();
  const itemsPerPage = 9;
  const [page, setPage] = React.useState(1);
  var noOfPages = (
    Math.ceil( totalItem / itemsPerPage)
  );
  console.log("Nro pages: "+noOfPages);
  const handleChangePage = (event, value) => {
    setPage(value);
  };
  
  
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {albumList
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map(albumItem => {
            //const labelId = `list-secondary-label-${albumItem.title}`;
            return (
              <Grid item key={albumItem.id} xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia className={classes.cardMedia} image={albumItem.url}/>
                        <CardContent className={classes.cardContent}>
                            <Typography gutterBottom variant="body2" color="secondary">
                                {albumItem.title}
                            </Typography>
                            <Typography  variant="body1">
                                ID: {albumItem.id}
                            </Typography>
                            <AppBar position="relative">
                                <Tabs value={value} onChange={handleTabs} variant="scrollable" aria-label="simple tabs example">
                                <Tab label="Detalles"  />
                                <Tab label="Ventas"  />
                                <Tab label="Stock" />
                                </Tabs>
                            </AppBar>
                            
                            <TabPanel value={value} index={0}>
                              <Typography variant="body2" color="initial">
                                {albumItem.url}
                              </Typography>
                              <Typography variant="overline" color="initial">
                              {albumItem.albumId}
                              </Typography>
                                
                              </TabPanel>
                            <TabPanel value={value} index={1}>
                              <Typography variant="body2" color="secondary">
                                {albumItem.title}
                              </Typography>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                              <Typography variant="caption" color="initial">
                                {albumItem.url}
                              </Typography>
                            </TabPanel>
                        </CardContent>
                            
                        </Card>
                      </Grid>
            );
          })}
      </Grid>
      <Divider />
      <Box component="span">
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChangePage}
          defaultPage={1}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          classes={{ ul: classes.paginator }}
        />
      </Box>
    </Container>
  );
};

export default Grids;