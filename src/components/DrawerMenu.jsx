import React from 'react'
import {makeStyles, Drawer, Divider} from '@material-ui/core'
import {ListMenu} from './ListMenu'

const drawerWidth=240
const useStyles = makeStyles(theme =>({
    drawer:{
        width:drawerWidth,
        flexShrink:0
    },
    drawerPaper:{
        width:drawerWidth
    },
    toolbar: theme.mixins.toolbar
}))

const DrawerMenu = (props) => {
    const classes = useStyles()
    return (
        <Drawer
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper
            }}
            variant={props.variant}
            anchor="left"
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
        >
            <div className={classes.toolbar}></div>
            <Divider/>
            <ListMenu/>
        </Drawer>
    )
}

export default DrawerMenu