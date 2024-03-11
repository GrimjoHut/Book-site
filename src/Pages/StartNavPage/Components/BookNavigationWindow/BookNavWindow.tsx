// import styles from "./BookNavWindow.module.css"

export interface IBookNavWindowProps {
    setCurNavMockID:React.Dispatch<React.SetStateAction<number>>,
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const BookNavWindow: React.FC<IBookNavWindowProps> = (props) => {
    const {setCurNavMockID, setIsShowModal} = props

    const HandleClickBook = () => {
        setCurNavMockID(3)
        setIsShowModal(true)
      }
    
      return (
        <>
          <button onClick={HandleClickBook}>Book</button>
        </>
      )
    }

export default BookNavWindow
