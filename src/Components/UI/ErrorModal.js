import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from './ErrorModal.module.css'

const ErrorModal = (props) => {
  const closeClickHandler = (event) => {
    props.closeModal()
  }

  const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={closeClickHandler}/>
  }

  const ModalOverlay = (props) => {
    return (
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
    )
  }

  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop/>, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(<ModalOverlay header={props.header} content={props.content} />, document.getElementById('modal-root'))}
    </Fragment>
  )
}

export default ErrorModal;