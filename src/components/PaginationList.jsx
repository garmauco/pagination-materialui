import React from "react";
import { List, ListItem, makeStyles, Divider, Box } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Pagination from "@material-ui/lab/Pagination";
import projectsList from '../datos.json'

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
  }
}));

const PaginationList = (props) => {
  const classes = useStyles();
  const itemsPerPage = 10;
  const [page, setPage] = React.useState(1);
  const [noOfPages] = React.useState(
    Math.ceil(projectsList.length / itemsPerPage)
  );

  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <List dense compoent="span">
        {projectsList
          .slice((page - 1) * itemsPerPage, page * itemsPerPage)
          .map(projectItem => {
            const labelId = `list-secondary-label-${projectItem.title}`;
            return (
              <ListItem
                key={projectItem.id}
                button
                onClick={() => console.log("")}
              >
                <ListItemText
                  id={labelId}
                  primary={projectItem.title}
                  secondary={
                    "Agile Metrics: B / Product Quality: A / Code Quality: A / Releases: C / Environment: A"
                  }
                  className={classes.item}
                />
                <ListItemAvatar>
                  <Avatar
                    alt={`Avatar n°${projectItem + 1}`}
                    src={projectItem.thumbnailUrl}
                    className={classes.avatar}
                  />
                </ListItemAvatar>
              </ListItem>
            );
          })}
      </List>
      <Divider />
      <Box component="span">
        <Pagination
          count={noOfPages}
          page={page}
          onChange={handleChange}
          defaultPage={1}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
          classes={{ ul: classes.paginator }}
        />
      </Box>
    </div>
  );
};

export default PaginationList;