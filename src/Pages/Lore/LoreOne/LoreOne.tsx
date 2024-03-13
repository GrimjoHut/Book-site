import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import BookLoreOne from "./BookLoreOne/BookLoreOne"
import { BackgroundShowChange } from "./Store/slices"
import { useState } from 'react';

const LoreOne: React.FC = () => {
    const [isButtonShow, setisButtonShow] = useState<boolean>(true)
    const state = useAppSelector( state => state.LoreOne)
    const dispatch = useAppDispatch()
    const BackChange = () => {
        dispatch(BackgroundShowChange())
        console.log(state.isShowBook)
        let ButtonText = ""
        if (state.isShowBook){
            ButtonText="Show"
        } else {
            ButtonText=""
        }
    }

 return ( 
    <body>
        <img className="BackImg"></img>
        <div className={state.isShowBook? "Book" : "HiddenBook"}><BookLoreOne /></div>
        <button onClick={BackChange} className="BackButtonS"></button>
    </body>
 )
}

export default LoreOne
