import React from "react";
import classes from './ErrorModal.module.css'
import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  const closeClickHandler = (event) => {
    props.closeModal()
  }

  return (
    <div>
      <div className={classes.backdrop} onClick={closeClickHandler}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.header}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.content}</p>
        </div>
        <footer className={classes.actions}>
          <Button type='button' onClick={closeClickHandler}>Close</Button>
        </footer>
      </Card>
    </div>
  )
}

export default ErrorModal;