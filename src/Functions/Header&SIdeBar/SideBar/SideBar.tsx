// import styles from "./SideBar.module.css"

export interface ISideBarProps {
    isShowSideBar:boolean
}

const SideBar: React.FC<ISideBarProps> = (props) => {
    const {isShowSideBar} = props

    return <div>SideBar</div>
}

export default SideBar