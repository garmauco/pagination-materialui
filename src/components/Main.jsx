import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    }
  }))

const Main = ({children}) =>{
    const classes = useStyles()
    return(
        <main className={classes.heroContent}>
            {children}
        </main>
    )
}

export default Main