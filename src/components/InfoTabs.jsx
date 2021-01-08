import React from 'react'
import {makeStyles, Tab, Tabs, AppBar, Typography } from "@material-ui/core";



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

function InfoTabs(props) {
    const [value, setValue] = React.useState(0);
    const handleTabs=(event, newval) =>{
        setValue(newval)
    }
    const {image,salary,text,rol,gender,civil_status,color,name} = props.userItem
    const useStyles = makeStyles({
        TxtColor: {
          color:color,
        },
    });
    const classes = useStyles()
    return (
        <>
            <AppBar position="relative">
                <Tabs value={value} onChange={handleTabs} variant="scrollable" aria-label="Tabs">
                <Tab label="Details"  />
                <Tab label="Sales"  />
                <Tab label="Stock" />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Typography variant="body2" color="initial">
                    Details
                </Typography>
                <Typography variant="body2" color="initial">
                    {image}
                </Typography>
                <Typography variant="overline" color="initial">
                <Typography variant="body2" className={classes.TxtColor}>
                    {color}
                </Typography>
                    {name}
                </Typography>
                
                </TabPanel>
            <TabPanel value={value} index={1}>
                <Typography variant="body2" color="initial">
                    Sales
                </Typography>
                <Typography variant="body2" color="secondary">
                    {salary}
                </Typography>
                <Typography variant="body1" color="primary">
                    {rol}
                </Typography>
                <Typography variant="caption" color="primary">
                    {civil_status}
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Typography variant="body2" color="initial">
                    Stock
                </Typography>
                <Typography variant="caption" color="initial">
                    {text}
                </Typography>
                <Typography variant="body1" color="secondary">
                    {gender}
                </Typography>
            </TabPanel>
        </>
    )
}

export default InfoTabs