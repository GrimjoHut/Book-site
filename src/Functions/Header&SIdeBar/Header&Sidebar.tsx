import "./Header&Sidebar.css"

import { useEffect, useState } from "react"
import NavHeader from "./NavHeader/NavHeader"
import SideBar from "./SideBar/SideBar"

const HeaderAndSideBar: React.FC = () => {
    const [isShowHeader, setIsShowHeader]=useState<boolean>(false)
    const [isShowSideBar, setIsShowSideBar]=useState<boolean>(false)
    const HeadTurn = () =>{
    setIsShowHeader(!isShowHeader)
    }
    const SideBarTurn = () =>{
    setIsShowSideBar(!isShowSideBar)
    }
    
    return (
        <body id="HeadAndSide">
        <div className="HeaderContainer">
        <button onClick={SideBarTurn} className="SideTurnButton">...</button>
        <div className="NavContainer"><NavHeader isShowHeader={isShowHeader} /></div>
        <button onClick={HeadTurn} className={!isShowHeader? "HeadTurnButton" : "HeadTurnButtonBack"}>&#9660;</button>
        </div>
        <div className="SideBarContainer"><SideBar isShowSideBar={isShowSideBar}/></div>
        <div className={isShowSideBar? "SideBarEffects" : "noSideBarEffects"}></div>
        </body>
    )
}

export default HeaderAndSideBar
