import React, {useState} from 'react';
import AddUser from "./Components/Users/AddUser";
import UsersList from "./Components/Users/UsersList";


function App() {
  const [users, setUser] = useState([])

  const addUser = (uName, uAge) => {
    setUser(prevState => {
      const prepareObj = {id: Math.random().toString(), username: uName, age: uAge}
      return [prepareObj, ...prevState]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUser}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
