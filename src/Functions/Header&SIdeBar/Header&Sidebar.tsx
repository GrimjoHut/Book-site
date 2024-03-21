import "./Header&Sidebar.css"

import { useEffect, useState } from "react"
import NavHeader from "./NavHeader/NavHeader"
import SideBar from "./SideBar/SideBar"

const HeaderAndSideBar: React.FC = () => {
    const [isShowHeader, setIsShowHeader]=useState<boolean>(false)
    const [isShowSideBar, setIsShowSideBar]=useState<boolean>(false)
    const HeadTurn = () =>{
    if (isShowHeader){
        setIsShowHeader(false)
    }
    else{
        setIsShowHeader(true)
    }
    }
    const SideBarTurn = () =>{
    if (isShowSideBar){
        setIsShowSideBar(false)
    }
    else{
        setIsShowSideBar(true)
    }
    }
    useEffect
    
    return (
        <body id="HeadAndSide">
        <div className="HeaderContainer">
        <button className="SideTurnButton">...</button>
        <div className="NavContainer"><NavHeader isShowHeader={isShowHeader} /></div>
        <button onClick={HeadTurn} className={!isShowHeader? "HeadTurnButton" : "HeadTurnButtonBack"}>&#9660;</button>
        </div>
        <div className="SideBarContainer"><SideBar isShowSideBar={isShowSideBar}/></div>
        </body>
    )
}

export default HeaderAndSideBar
