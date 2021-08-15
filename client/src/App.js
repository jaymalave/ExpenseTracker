import './App.css';
import Balance from './components/Balance';
import ExpenseList from './components/ExpenseList';
import AddExpense from './components/AddExpense';
import {ExpenseProvider} from './context/ExpenseContext';

function App() {
  return (
    <ExpenseProvider>
    <div className="App">
        <h1>Expense Tracker</h1>
        <Balance/>
        <ExpenseList/>
        <AddExpense/>
    </div>
    </ExpenseProvider>
  );
}

export default App;
