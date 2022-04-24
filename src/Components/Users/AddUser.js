import React, {Fragment, useRef, useState} from "react";

import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState({hasError: false, header: '', content: ''});

  const submitFormHandler = event => {
    event.preventDefault()
    const usernameValue = nameInputRef.current.value
    const ageValue = ageInputRef.current.value
    if (usernameValue.trim().length === 0 || ageValue.trim().length === 0){
      setError({hasError: true, header: 'Error', content: 'Please fill the inputs'})
      return;
    }

    if (+ageValue < 1){
      setError({hasError: true, header: 'Error', content: 'Age must be more then 1'})
      return;
    }

    props.onAddUser(usernameValue, ageValue)
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  }

  const onCloseErrorModal = () => {
    setError({hasError: false, header: '', content: ''})
  }

  return (
    <Fragment>
      {error.hasError && <ErrorModal header={error.header} content={error.content} closeModal={onCloseErrorModal}/>}
      <Card className={classes.input}>
        <form onSubmit={submitFormHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" ref={nameInputRef}/>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Fragment>
    )
}

export default AddUser;