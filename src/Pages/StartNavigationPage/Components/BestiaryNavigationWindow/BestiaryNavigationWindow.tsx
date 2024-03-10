// import styles from "./BesNavWindow.module.css"

export interface IBesNavWindowProps {
    setCurNavMockID:React.Dispatch<React.SetStateAction<number>>
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const BesNavWindow: React.FC<IBesNavWindowProps> = (props) => {
    const {setCurNavMockID, setIsShowModal} = props

    return <div>BesNavWindow</div>
}

export default BesNavWindow
