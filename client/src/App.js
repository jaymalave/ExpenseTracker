import './App.css';
import Balance from './components/Balance';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';

function App() {
  return (
    <div className="App">
        <h1>Expense Tracker</h1>
        <Balance/>
        <ExpenseList/>
        <AddExpense/>
    </div>
  );
}

export default App;
