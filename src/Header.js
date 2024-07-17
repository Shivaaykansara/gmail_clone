import React from 'react'
import './Header.css'
import { Avatar, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
        <div className="header_left">
            <IconButton>
                <MenuIcon />
            </IconButton>

            <img src="https://cdn.vox-cdn.com/thumbor/aTXCGGvjBjzr7pl-okgOYh09Dr0=/0x0:1320x880/1400x1050/filters:focal(660x440:661x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="" />
        </div>

        <div className="header_middle">
            <SearchIcon/>
            <input placeholder="Search mail" type="text" />
            <ArrowDropDownIcon className='header_inputCaret'/>
        </div>

        <div className="header_right">
            <IconButton>
                <AppsIcon />
            </IconButton>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <Avatar/>
        </div>
    </div>
  )
}

export default Header