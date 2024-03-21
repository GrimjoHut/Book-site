import "./NavHeader.css"

export interface INavHeaderProps {
    isShowHeader: boolean
}

const NavHeader: React.FC<INavHeaderProps> = (props) => {
    const {isShowHeader} = props

    return (
        <div className="LinksContainer">
            <a className={isShowHeader? "NavLink" : "NavLinkHidden"} href="/Lore">Lore</a>
            <a className={isShowHeader? "NavLink" : "NavLinkHidden"} href="/Map">Map</a>
            <a className={isShowHeader? "NavLink" : "NavLinkHidden"} href="/Book">Book</a>
            <a className={isShowHeader? "NavLink" : "NavLinkHidden"} href="/Pantheon">Pantheon</a>
            <a className={isShowHeader? "NavLink" : "NavLinkHidden"} href="/Bestiary">Bestiary</a>
        </div>
    )
}

export default NavHeader

