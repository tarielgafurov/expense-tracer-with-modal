import React, { useState } from 'react'
import style from "./ExpenseItem.module.css"
import Button from '../UI/Button'
import Modal from '../UI/Modal'

const ExpenseItem = (props) => {

  const [modalVisible , setModalVisible] = useState(false)

  const openModal = () => {
    setModalVisible((prevState) => !prevState)
  }

  return (
    <>
    { modalVisible ? <Modal onClose={openModal} /> : null}
    <div className={style.expenses}>
      <h1>{props.title}</h1>
      <h2>{props.price}</h2>
      <h3>{props.date}</h3>
      <Button onClick={openModal} >Delete</Button>
    </div>
    </>
  )
}

export default ExpenseItem
