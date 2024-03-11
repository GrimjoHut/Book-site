// import styles from "./LoreNavWindow.module.css"

export interface ILoreNavWindowProps {
    setCurNavMockID:React.Dispatch<React.SetStateAction<number>>,
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const LoreNavWindow: React.FC<ILoreNavWindowProps> = (props) => {
    const {setCurNavMockID, setIsShowModal} = props

    const HandleClickLore = () => {
        setCurNavMockID(5)
        setIsShowModal(true)
      }
    
      return (
        <>
          <button onClick={HandleClickLore}>Lore</button>
        </>
      )
    }

export default LoreNavWindow
