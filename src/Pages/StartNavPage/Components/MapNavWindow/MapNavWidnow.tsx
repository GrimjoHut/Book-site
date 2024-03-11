// import styles from "./MapNav.module.css"

export interface IMapNavWindowProps {
    setCurNavMockID:React.Dispatch<React.SetStateAction<number>>,
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const MapNavWindow: React.FC<IMapNavWindowProps> = (props) => {
    const {setCurNavMockID, setIsShowModal} = props

    const HandleClickMap = () => {
        setCurNavMockID(4)
        setIsShowModal(true)
      }
    
      return (
        <>
          <button onClick={HandleClickMap}>Map</button>
        </>
      )
    }

export default MapNavWindow
