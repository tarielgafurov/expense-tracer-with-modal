import React, { useState } from 'react'
import "./Expenses.css"
import ExpenseItem from '../expense-items/ExpenseItem'
import ExpensesFilter from '../expense-filter/ExpensesFilter'
import Chart from '../chart/Chart'

const Expenses = ({data}) => {

  const [selectedYear , setSelectedYear] = useState("2021")

  const yearChnageHandler = (year) => {
    setSelectedYear(year)
  }


  const filteredByYear = data.filter((el) => {
      let newDate = new Date(el.date)
      return newDate.getFullYear().toString() === selectedYear
  })



  return (
    <div className='global-expenses-container' >
        <ExpensesFilter onFilteredYear={yearChnageHandler} value={selectedYear}/>
        <Chart items={filteredByYear} />
      {filteredByYear.map((expenses) => {
        return (
            <div className='expenses-container' key={expenses.id} >
                <ExpenseItem title={expenses.title} price={expenses.price} date={expenses.date} />
            </div>
        )
      })}
    </div>
  )
}

export default Expenses
