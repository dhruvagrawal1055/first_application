// import logo from "./logo.svg";
import "./components/ExpenseItem";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/expenses";
import Card from "./components/card"
import Navbar from "./components/Navbar";


function App() {
  // const expenseDate = new Date();
  // const expenseTitle = "Car insurance";
  // const expenseAmount = "$250";
  const expenselist = [
    {
      id: 'e1',
      title: "Faltu",
      amount: 250,
      date: new Date()
    },
    {
      // id: e2,
      title: "Faltu2",
      amount: 500,
      date: new Date()
    },
    {
      // id: e3,
      title: "Faltu3",
      amount: 156,
      date: new Date()
    },
    {
      // id: e4,
      title: "Faltu4",
      amount: 106,
      date: new Date()
    }

  ]
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <Card>
    <div className="background3">
      <div className="App-header">
        <h1>Hello World</h1>
      </div>
      {/* <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt esse ipsa
        quos reiciendis error nobis magni quidem libero, nisi doloremque est,
        consectetur nostrum quaerat quibusdam quis delectus. Tempore ipsum
        placeat excepturi nemo vero ea non, quos consequatur consequuntur
        obcaecati. Repellendus, accusantium at, molestias porro quo praesentium
        animi dolorem tenetur a earum architecto nulla consectetur explicabo
        eius suscipit dolor voluptatibus sed facilis minima maxime asperiores ad
        possimus eveniet corrupti. Libero, animi nulla dolore odit deserunt
        obcaecati beatae exercitationem fuga deleniti similique doloribus
        perspiciatis laboriosam assumenda adipisci laborum ducimus accusantium
        voluptatibus corporis distinctio ut quisquam inventore? Odio in corporis
        illo sequi nisi tempora esse fugit veniam tenetur reprehenderit autem
        quasi, officiis nam animi cumque minima nemo ipsum voluptatibus velit
        natus totam veritatis eos. Voluptatem cupiditate repellendus minima.
        Impedit fugiat non animi fugit est consectetur eveniet expedita quod
        quos ducimus totam, voluptates error distinctio vitae sequi reiciendis
        recusandae dicta omnis obcaecati molestias odit?
      </p> */}
      <ExpenseItem></ExpenseItem>
      <ExpenseItem title = {expenselist[0].title} amount = {expenselist[0].amount} date = {expenselist[0].date.toISOString()}></ExpenseItem>
      <ExpenseItem title = {expenselist[1].title} amount = {expenselist[1].amount} date = {expenselist[1].date.toISOString()}></ExpenseItem>
      <ExpenseItem title = {expenselist[2].title} amount = {expenselist[2].amount} date = {expenselist[2].date.toISOString()}></ExpenseItem>
    <ExpenseItem title = {expenselist[3].title} amount = {expenselist[3].amount} date = {expenselist[3].date.toISOString()}></ExpenseItem>
      {/* <Navbar></Navbar> */}

      {/* <Expenses expence = {expenselist}></Expenses> */}
    </div>
    /* </Card> */
  );
}

export default App;
