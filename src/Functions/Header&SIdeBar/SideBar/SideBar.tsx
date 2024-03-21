import  './Sidebar.css'

export interface ISideBarProps {
    isShowSideBar:boolean
}

const SideBar: React.FC<ISideBarProps> = (props) => {
    const {isShowSideBar} = props

    return (
        <div className="SideContentContainer">
            
        </div>
    )
}

export default SideBar
