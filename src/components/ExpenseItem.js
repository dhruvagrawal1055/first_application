import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="App-components">
      {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit numquam amet repellendus! Minima officia, ipsam eligendi veritatis velit illum perferendis fugit eius quidem voluptate incidunt accusamus iure minus sit pariatur?</p> */}
      <div>Date: {props.date}</div>
      {/* <ExpenseDate date = {props.date}></ExpenseDate> */}
      <div>title: {props.title}</div>
      <div>Amount: {props.amount}</div>
    </div>
  );
}
export default ExpenseItem;
