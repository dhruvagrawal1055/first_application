import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return (
        <div>
            <ExpenseItem
                title={props.expence[0].title}
                date={props.expence[0].datez}
                amount={props.expence[0].amount}>
            </ExpenseItem>
            <ExpenseItem
                title={props.expence[1].title}
                date={props.expence[1].date.toISOString}
                amount={props.expence[1].amount}>
            </ExpenseItem>
            <ExpenseItem
                title={props.expence[2].title}
                date={props.expence[2].date.toISOString}
                amount={props.expence[2].amount}>
            </ExpenseItem>
            <ExpenseItem
                title={props.expence[3].title}
                date={props.expence[3].date.toISOString}
                amount={props.expence[3].amount}>
            </ExpenseItem>
        </div>
    );
}
export default Expenses;