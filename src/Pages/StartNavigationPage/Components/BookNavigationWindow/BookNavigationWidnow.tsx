// import styles from "./BookNavWindow.module.css"

export interface IBookNavWindowProps {
    setCurNavMockID:React.Dispatch<React.SetStateAction<number>>,
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

const BookNavWindow: React.FC<IBookNavWindowProps> = (props) => {
    const {setCurNavMockID, setIsShowModal} = props

    return <div>BookNavWindow</div>
}

export default BookNavWindow
