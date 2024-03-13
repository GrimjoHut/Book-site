import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import BookLoreOne from "./BookLoreOne/BookLoreOne"
import { BackgroundShowChange } from "./Store/slices"
import { useState, useEffect } from 'react';

const LoreOne: React.FC = () => {
    const [buttonText, setButtonText] = useState<string>("Show"); // Используем useState для кнопки

    const state = useAppSelector(state => state.LoreOne)
    const dispatch = useAppDispatch()

    useEffect(() => {

        setButtonText(state.isShowBook ? "Show" : "Hide");
    }, [state.isShowBook]);

    const handleBackChange = () => {
        dispatch(BackgroundShowChange());
    }

    return ( 
        <div>
            <img className="BackImg"></img>
            <div className={state.isShowBook ? "Book" : "HiddenBook"}><BookLoreOne /></div>
            <button onClick={handleBackChange} className="BackButton">{buttonText}</button>
        </div>
    )
}

export default LoreOne
