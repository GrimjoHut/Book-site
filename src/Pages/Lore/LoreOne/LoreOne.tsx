import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import { BackgroundChange } from "./Store/slices"

const LoreOne: React.FC = () => {
    const state = useAppSelector( state => state.LoreOne)
    const dispatch = useAppDispatch()
    const BackChange = () => {
        dispatch(BackgroundChange())
    }

 return ( 
    <body>
        <img className="BackImg"></img>
        <div className={state.isShowBook? "Book" : "HiddenBook"}><BookLoreOne /></div>
        <button onClick={BackChange} className="BackButton"></button>
    </body>
 )
}

export default LoreOne
