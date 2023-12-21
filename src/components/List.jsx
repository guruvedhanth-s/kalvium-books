import "../App.css"
function List(props) {
    const{title, img, rating} = props

  return (
    <div className="book">
        <div>
        <img src={img} alt="" />
        <p>{title}</p>
        <br />
        <p>{rating?rating:4.5} ⭐   <span id="free">Free</span></p>
        </div>
    </div>
  )
}

export default List