import "./BookLoreOne.css"
import BookPageLeft from "./BookPages/BookPageLeft"
import BookPageRight from "./BookPages/BookPageRight"

const BookLoreOne: React.FC = () => {
  return (
      <div className="BookStyle">
        <div className="PageLeft"><BookPageLeft /></div>
        <div className="PageLeft"><BookPageRight /></div>
      </div>
  )
}

export default BookLoreOne
