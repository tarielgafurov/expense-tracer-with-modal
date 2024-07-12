import React, { useRef, useState } from 'react'
import ExpenseFormUI from '../UI/ExpenseFormUI'
import "./Expense-Form.css"
import Button from '../UI/Button'

const ExpenseForm = (props) => {

  // const [title , setTitle] = useState("")
  // const [price , setPrice] = useState("")
  // const [date , setDate] = useState("")

  const titleRef = useRef()
  const priceRef = useRef()
  const dateRef = useRef()
  
  // console.log(ref);
  console.log("render");
  
  // console.log(titleRef.current);
  // const titleChangeHandler = (e) => {
  //   setTitle(e.target.value)
  // }
  // const priceChangeHandler = (e) => {
  //   setPrice(e.target.value)
  // }
  // const dateChangeHandler = (e) => {
  //   setDate(e.target.value)
  // }

    const submitHandler = (e) => {
        e.preventDefault()
    }

    // const clickRefHandler = () => {
    //   titleRef.current.focus()
    //   priceRef.current.style.backgroundColor = "green"
    // }

    const addNewExpenses = () => {
      const myExpenses = {
        title: titleRef.current.value,
        price: priceRef.current.value,
        date: dateRef.current.value,
        id: Math.random().toString()
      }
      console.log(myExpenses);

      props.save(myExpenses)
      // setTitle("")
      // setPrice("")
      // setDate("")

    }




  return (
    <form onSubmit={submitHandler} >
      <ExpenseFormUI ref={titleRef} title="title:" type="text" />
      <ExpenseFormUI ref={priceRef} title="price:" type="number" />
      <ExpenseFormUI ref={dateRef} title="date:" type="date" />
      <div>
        <Button onClick={props.close} >close</Button>
        <Button onClick={addNewExpenses} >add</Button>
      </div>
    </form>
  )
}

export default ExpenseForm
