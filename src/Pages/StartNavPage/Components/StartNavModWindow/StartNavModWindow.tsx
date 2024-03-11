import "./StartNavModWindow.css";
import { StartNavArr, StartNavMock } from "./../../StartNavPageMock.";
import { Link } from "react-router-dom";

export interface IStartNavModWindowProps {
    isShowModal: boolean;
    setIsShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    curNavMockID: number;
}

const StartNavModWindow: React.FC<IStartNavModWindowProps> = (props) => {
    const { setIsShowModal, isShowModal, curNavMockID } = props;
    const selectedStartNavMock: StartNavMock | undefined = StartNavArr.find(StartNavArr => StartNavArr.id === curNavMockID);

    const HandleClose = () => {
        setIsShowModal(false);
    };

    if (selectedStartNavMock) {
        return (
            <>
                <img src={selectedStartNavMock.url} alt={selectedStartNavMock.text} />
                <button onClick={HandleClose}>Back</button>
                <Link to={selectedStartNavMock.Path}>
                    <button>{selectedStartNavMock.text}</button>
                </Link>
            </>
        );
    }

    return null; // Возвращаем null, если не найден объект
};

export default StartNavModWindow;
