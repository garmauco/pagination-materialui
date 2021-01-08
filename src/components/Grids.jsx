import React from "react";
import { makeStyles, Divider, Box, Container, Grid, Typography } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
// import data from '../datos.json'
import data from '../users.json'
import GridSingle from "./GridSingle";
// import Loader from "./Loader";

const useStyles = makeStyles(theme => ({
  root: {
    display:'flex',
  },
  paginator: {
    justifyContent: "center",
    padding: "10px"
  },
  cardGrid: {
    flexGrow:1,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
}));



const Grids = (props) => {  
  // var albumList = data
  // var totalItem = albumList.length
  // if (props.search.length > 0){
    
  //   albumList = albumList.filter((i) => {
  //     return i.title.toLowerCase().match(props.search.toLowerCase())
  //   })
  //   totalItem = albumList.length
  var userList = data
  var totalItem = userList.length
  if (props.search.length > 0){
    
    userList = userList.filter((i) => {
      return i.name.toLowerCase().match(props.search.toLowerCase())
    })
    totalItem = userList.length
   //console.log(totalItem);
  }
  
  const classes = useStyles();
  const itemsPerPage = 9;
  const [page, setPage] = React.useState(1);
  // const [loading, setLoading] = React.useState(false)
  var noOfPages = (
    Math.ceil( totalItem / itemsPerPage)
  );
  console.log("Nro pages: "+noOfPages);
  const handleChangePage = (event,value) => {
    setPage(value);
  };
  
  
  return (
    <div className={classes.root}>
    <Container className={classes.cardGrid} maxWidth="md">
      <Typography variant="h3" color="inherit" noWrap>
            Users
      </Typography>
      <Grid container spacing={4} className={classes.toolbar}>
        {/* {albumList
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map(albumItem => {
            return (
                    <GridSingle key={albumItem.id} albumItem={albumItem}/>
            );
          })} */}
          {userList
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map(userItem => {
            return (
                    <GridSingle key={userItem.id} userItem={userItem}/>
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
    </div>
  );
};

export default Grids;