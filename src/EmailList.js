import React from 'react'
import './EmailList.css'
import { ChevronLeft, ChevronRight, Inbox, KeyboardHide, LocalOffer, MoreVert, People, Redo, Settings } from '@mui/icons-material'
import { Checkbox, IconButton } from '@mui/material'
import ArrowDropDown from '@mui/icons-material/ArrowDropDown'
import Section from './Section'
import EmailRow from './EmailRow'

function EmailList() {
  return (
    <div className='emailList'>
        <div className="emailList_settings">
            <div className="emailList_settingsLeft">
                <Checkbox/>
                <IconButton>
                    <ArrowDropDown/>
                </IconButton>
                <IconButton>
                    <Redo/>
                </IconButton>
                <IconButton>
                    <MoreVert/>
                </IconButton>
            </div>
            <div className="emailList_settingsRight">
                <IconButton>
                    <ChevronLeft/>
                </IconButton>
                <IconButton>
                    <ChevronRight/>
                </IconButton>
                <IconButton>
                    <KeyboardHide/>
                </IconButton>
                <IconButton>
                    <Settings/>
                </IconButton>
            </div>
        </div>
        <div className="emailList_sections">
            <Section Icon={Inbox} title="primary" color="red" selected/> 
            <Section Icon={People} title="Social" color="#1A73E8"/>
            <Section Icon={LocalOffer} title="Promotions" color="green"/>
        </div>
        <div className="emailList_list">
            <EmailRow
                title="Google"
                subject="Selected for summer interdhip 2025"
                description="pack your bag and come to silicon valley we are waiting for you"
                time="7am"
            />
        </div>
    </div>
  )
}

export default EmailList