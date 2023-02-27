function Card(props) {
    const classes = 'card ' + props.className;
    return (
        <div className="Card">{props.childern}</div>
    )
}
export default Card;