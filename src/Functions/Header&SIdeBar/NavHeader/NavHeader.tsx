import "./NavHeader.css"

export interface INavHeaderProps {
    isShowHeader: boolean
}

const NavHeader: React.FC<INavHeaderProps> = (props) => {
    const {isShowHeader} = props

    return (
        <div className="LinksContainer">
            <a className="NavLink" href="/Lore">Lore</a>
            <a className="NavLink" href="/Map">Map</a>
            <a className="NavLink" href="/Book">Book</a>
            <a className="NavLink" href="/Pantheon">Pantheon</a>
            <a className="NavLink" href="/Bestiary">Bestiary</a>
        </div>
    )
}

export default NavHeader

