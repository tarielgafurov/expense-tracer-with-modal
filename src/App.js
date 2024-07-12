// import { useState } from 'react';
import { Fragment, useState } from 'react';
import './App.css';
import ExpenseForm from './components/expense-form/ExpenseForm';
import Header from './components/header/Header';
import Expenses from './components/expenses/Expenses';

const products = []

function App() {


  let [state , setState] = useState(false) 
  const [data , setData] = useState(products)

  const stateChangeHandler = () => {
      setState((prevState) => !prevState) 
  }

  const onSaveExpenses = (a) => {
    setData((prevState) => {
      return [...prevState , a]
    })
  }



  return (
    <div className="App">
      <Header formHandler={stateChangeHandler} />
      {state ? <ExpenseForm save={onSaveExpenses} close={stateChangeHandler} /> : null }
      <Expenses data={data} />
    </div>
  );
}

export default App;



// Git
// Github
// branch
// local and remote repzitory



// React Dom (VDOM) 
// Control and UnControl components
// State Full and State less
