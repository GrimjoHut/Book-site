import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import BookLoreOne from "./BookLoreOne/BookLoreOne"
import { BackgroundShowChange } from "./Store/slices"
import { useState, useEffect } from 'react';
import "./LoreOne.css"

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
        <body className="LoreOneBody">
            <img className="BackImg" src={state.curBackground}></img>
            <div className={state.isShowBook ? "Book" : "HiddenBook"}><BookLoreOne /></div>
            <button onClick={handleBackChange} className="BackButton">{buttonText}</button>
        </body>
    )
}

export default LoreOne
