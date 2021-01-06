import React from "react";
import { makeStyles, Divider, Box, Container, Grid, Typography } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import data from '../datos.json'
import GridSingle from "./GridSingle";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  paginator: {
    justifyContent: "center",
    padding: "10px"
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  }
}));



const Grids = (props) => {  
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
      <Typography variant="h1" color="inherit" noWrap>
            Álbumes
      </Typography>
      <Grid container spacing={4}>
        {albumList
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map(albumItem => {
            return (
                <GridSingle key={albumItem.id} albumItem={albumItem}/>
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