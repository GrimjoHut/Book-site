// import styles from "./PantheonNavWindow.module.css"

export interface IGodNavWindowProps {
    setCurNavMockID:React.Dispatch<React.SetStateAction<number>>
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const GodNavWindow: React.FC<IGodNavWindowProps> = (props) => {
    const {setCurNavMockID, setIsShowModal} = props

    const HandleClickGod = () => {
        setCurNavMockID(2)
        setIsShowModal(true)
      }
    
      return (
        <>
          <button onClick={HandleClickGod}>God</button>
        </>
      )
    }

export default GodNavWindow
