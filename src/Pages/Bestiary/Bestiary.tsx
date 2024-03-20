// import styles from "./Bestiary.module.css"

import NavHeader from "../../Functions/Header&SIdeBar/NavHeader/NavHeader"

export interface IBestiaryProps {
    //
}

const Bestiary: React.FC<IBestiaryProps> = (props) => {
    const {} = props

    return (
        <div className="Header"><NavHeader /></div>
    )
}

export default Bestiary
