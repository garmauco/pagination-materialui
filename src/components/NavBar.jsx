import React from 'react'
import {AppBar, Toolbar, TextField, IconButton} from '@material-ui/core';
import UserIcon from '@material-ui/icons/PeopleAlt';
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth=240
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
    menuButton:{
        marginRight: theme.spacing(2),//base 8 * (2)= 16px de espaciado
        [theme.breakpoints.up('sm')]:{//oculta el boton en medidas superiores a SM
          display:'none'
        }
    },
    title:{
        flex:1
    },
    appBar:{
        [theme.breakpoints.up('sm')]:{
          width:`calc(100% - ${drawerWidth}px)`,
          marginLeft: drawerWidth
        }
    }
}))

const NavBar = (props) => {
    const classes = useStyles()
    const {handleChangeSearch} = props
    return (
        <AppBar className={classes.appBar}>
        <Toolbar>
            <IconButton 
                    aria-label="menu" 
                    className={classes.menuButton}
                    onClick={() => props.desplegar()}
                    >
                    <MenuIcon/>                      
            </IconButton>
            <UserIcon className={classes.icon} />

            <Typography variant="h6" color="inherit" noWrap className={classes.title}>
                Users
            </Typography>
            <TextField size="small" id="txt-search" onChange={handleChangeSearch} className={classes.searchTxt} variant="outlined" label="Buscar..." />
        </Toolbar>
      </AppBar>
    )
}

export default NavBar