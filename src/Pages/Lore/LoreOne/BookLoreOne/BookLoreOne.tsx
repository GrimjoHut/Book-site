// import styles from "./BookLoreOne.module.css"

import BookPageLeft from "./BookPages/BookPageLeft"
import BookPageRight from "./BookPages/BookPageRight"

const BookLoreOne: React.FC = () => {
    return (
        <div>
            <BookPageLeft />
            <BookPageRight />
        </div> 
    )
}

export default BookLoreOne
