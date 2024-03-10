// import styles from "./LoreNavWindow.module.css"

export interface ILoreNavWindowProps {
    setCurNavMockID:React.Dispatch<React.SetStateAction<number>>,
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const LoreNavWindow: React.FC<ILoreNavWindowProps> = (props) => {
    const {setCurNavMockID, setIsShowModal} = props

    return <div>LoreNavWindow</div>
}

export default LoreNavWindow
