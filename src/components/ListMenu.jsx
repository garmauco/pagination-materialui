import React from 'react'
import {List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core'
import {ViewModule, Palette, Wc, BubbleChart, SupervisorAccount } from '@material-ui/icons';

export const ListMenu = () => {
    return (
            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <SupervisorAccount />
                    </ListItemIcon>
                    <ListItemText>
                        Rol
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Palette/>
                    </ListItemIcon>
                    <ListItemText primary="Color"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Wc/>
                    </ListItemIcon>
                    <ListItemText primary="Gender"/>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <BubbleChart/>
                    </ListItemIcon>
                    <ListItemText primary="Civil Status"/>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemIcon>
                        <ViewModule/>
                    </ListItemIcon>
                    <ListItemText>
                        Todos
                    </ListItemText>
                </ListItem>
            </List>
    )
}
