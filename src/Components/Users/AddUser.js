import React, {useState} from "react";

import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('')
  const [error, setError] = useState({hasError: false, header: '', content: ''});

  const submitFormHandler = event => {
    event.preventDefault()
    if (username.trim().length === 0 || age.trim().length === 0){
      setError({hasError: true, header: 'Error', content: 'Please fill the inputs'})
      return;
    }

    if (+age < 1){
      setError({hasError: true, header: 'Error', content: 'Age must be more then 1'})
      return;
    }

    props.onAddUser(username, age)
    setUsername('')
    setAge('')
  }

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setAge(event.target.value)
  }

  const onCloseErrorModal = () => {
    setError({hasError: false, header: '', content: ''})
  }

  return (
    <div>
      {error.hasError && <ErrorModal header={error.header} content={error.content} closeModal={onCloseErrorModal}/>}
      <Card className={classes.input}>
        <form onSubmit={submitFormHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" value={username} onChange={usernameChangeHandler}/>
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" value={age} onChange={ageChangeHandler}/>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
    )
}

export default AddUser;