import React, { forwardRef } from 'react'
import "./ExpenseFormUI.css"

const ExpenseFormUI = forwardRef((props , ref) => {
  return (
    <div className='container-form' >
      <label>{props.title}</label>
      <input ref={ref} value={props.value} onChange={props.onChange} type={props.type} placeholder={props.placeholder || "..."} />
    </div>
  )
})

export default ExpenseFormUI
