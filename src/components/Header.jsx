import React from 'react'
import {Hidden} from '@material-ui/core'
import NavBar from './NavBar'
import DrawerMenu from './DrawerMenu'
import { useState } from 'react'


const Header = (props) => {
    const [abrir, setAbrir] = useState(false)
    const {handleChangeSearch} = props
    const desplegar = () =>{
        setAbrir(!abrir)
    }
    return (
        <>
            <NavBar desplegar={desplegar} handleChangeSearch={handleChangeSearch}/>
            <Hidden xsDown>
                <DrawerMenu
                    variant="permanent"
                    open={true}
                />
            </Hidden>
            <Hidden smUp>
                <DrawerMenu
                    variant="temporary"
                    open={abrir}
                    onClose={desplegar}
                />
            </Hidden>
        </>
    )
}

export default Header
