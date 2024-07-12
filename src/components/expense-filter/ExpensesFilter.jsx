import React from 'react'
import a from "./ExpenseFilter.module.css"

const ExpensesFilter = (props) => {

  const onFiltered = (e) => {
    props.onFilteredYear(e.target.value)
  }

  return (
    <div className={a.containerFilter} >
      <h2>Filtered by year</h2>
      {/* {} */}
      <select value={props.value} onChange={onFiltered} name="" id="">
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
        <option value="2024">2024</option>
      </select>
    </div>
  )
}

export default ExpensesFilter
