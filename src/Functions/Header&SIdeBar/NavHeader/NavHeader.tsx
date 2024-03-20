import "./NavHeader.css"

import { useState } from "react"

const NavHeader: React.FC = () => {
    const [isShowHeader, setIsShowHeader] = useState<boolean>(false)

    return (
        <body className="BodyHeader">
        <div className="LinksContainer">
            <div className="NavLink"><a href="/Lore">Lore</a></div>
            <div className="NavLink"><a href="/Map">Map</a></div>
            <div className="NavLink"><a href="/Book">Book</a></div>
            <div className="NavLink"><a href="/Pantheon">Pantheon</a></div>
            <div className="NavLink"><a href="/Bestiary">Bestiary</a></div>
        </div>
            <div className="ButtonHeadCont">
                fdfdfds
            </div>
        </body>
    )
}

export default NavHeader
