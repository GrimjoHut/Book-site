// import styles from "./PantheonNavWindow.module.css"

export interface IPantheonNavWindowProps {
    setCurNavMockID:React.Dispatch<React.SetStateAction<number>>
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const PantheonNavWindow: React.FC<IPantheonNavWindowProps> = (props) => {
    const {setCurNavMockID, setIsShowModal} = props

    return <div>PantheonNavWindow</div>
}

export default PantheonNavWindow
