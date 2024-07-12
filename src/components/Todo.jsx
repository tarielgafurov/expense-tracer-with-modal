import React, { Fragment, useState } from 'react'
import ExpenseFormUI from './UI/ExpenseFormUI'
import Button from './UI/Button'

const Todo = (props) => {

    const [text , setText] = useState("")

    const textChangeHandler = (e) => {
        setText(e.target.value)
        console.log(text);
    }

    const addTextHandler = () => {
            const data = {
                text
            }
            props.save(data)
            setText("")
    }
    

  return (
    <Fragment >
      <ExpenseFormUI onChange={textChangeHandler} value={text} type="text" />
      <Button onClick={addTextHandler} >ADD</Button>
    </Fragment>
  )
}

export default Todo
