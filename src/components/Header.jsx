import React from 'react'
import {AppBar, Toolbar, TextField} from '@material-ui/core';
import AlbumIcon from '@material-ui/icons/Album';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight:theme.spacing(2)
    },
    searchTxt:{
        backgroundColor:theme.palette.common.white,
        '& label': {
            backgroundColor: theme.palette.common.white
          },
        border:'2px',
        borderColor:theme.palette.common.white,
        borderRadius:0
    },
    title:{
        flex:1
    }
}))




const Header = (props) => {
    const classes = useStyles()
    const {handleChangeSearch} = props
    return (
        <AppBar position="relative">
        <Toolbar>
            <AlbumIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap className={classes.title}>
                Álbumes
            </Typography>
            <TextField size="small" id="txt-search" onChange={handleChangeSearch} className={classes.searchTxt} variant="outlined" label="Buscar..." />
        </Toolbar>
      </AppBar>
    )
}

export default Header


