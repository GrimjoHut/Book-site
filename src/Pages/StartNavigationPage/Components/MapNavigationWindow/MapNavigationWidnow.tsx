// import styles from "./MapNav.module.css"

export interface IMapNavWindowProps {
    setCurNavMockID:React.Dispatch<React.SetStateAction<number>>,
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const MapNavWindow: React.FC<IMapNavWindowProps> = (props) => {
    const {setCurNavMockID, setIsShowModal} = props

    return <div>MapNav</div>
}

export default MapNavWindow
