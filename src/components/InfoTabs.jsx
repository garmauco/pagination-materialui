import React from 'react'
import {Tab, Tabs, AppBar, Typography } from "@material-ui/core";

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
    const {url,albumId,title} = props.albumItem
    return (
        <>
            <AppBar position="relative">
                <Tabs value={value} onChange={handleTabs} variant="scrollable" aria-label="Tabs">
                <Tab label="Detalles"  />
                <Tab label="Ventas"  />
                <Tab label="Stock" />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Typography variant="body2" color="initial">Detalles</Typography>
                <Typography variant="body2" color="initial">
                {url}
                </Typography>
                <Typography variant="overline" color="initial">
                {albumId}
                </Typography>
                
                </TabPanel>
            <TabPanel value={value} index={1}>
            <Typography variant="body2" color="initial">Ventas</Typography>
                <Typography variant="body2" color="secondary">
                {title}
                </Typography>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <Typography variant="body2" color="initial">Stock</Typography>
                <Typography variant="caption" color="initial">
                {url}
                </Typography>
            </TabPanel>
        </>
    )
}

export default InfoTabs
