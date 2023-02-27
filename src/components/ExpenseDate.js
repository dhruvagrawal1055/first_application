function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const year = props.date.getFullYear();
    return (
        <div>
            Date: {year}
        </div>
    );
}
export default ExpenseDate;