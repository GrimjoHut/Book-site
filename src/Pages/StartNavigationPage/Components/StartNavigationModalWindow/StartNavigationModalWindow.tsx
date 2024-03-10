// import styles from "./StartNavigationModalWindow.module.css"
import { StartNavArr, StartNavMock } from "../../StartNavigationMock"


export interface IStartNavigationModalWindowProps {
    isShowModal:boolean,
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>,
    curNavMockID:number
}

const StartNavigationModalWindow: React.FC<IStartNavigationModalWindowProps> = (props) => {
    const {setIsShowModal, isShowModal, curNavMockID} = props
    const selectedStartNavMock: StartNavMock | undefined = StartNavArr.find(StartNavArr => StartNavArr.id === curNavMockID);

    const HandleClose = () =>{
        setIsShowModal(false)
    }

    if (selectedStartNavMock)
    return (
        <>
        <img src={selectedStartNavMock.url}></img>
        <button onClick={HandleClose}>{selectedStartNavMock.text}</button>
        </>
    )
}

export default StartNavigationModalWindow
