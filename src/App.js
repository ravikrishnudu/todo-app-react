import React,{ useState, useEffect} from 'react';
import Todo from './Todo';
import { Button, FormControl,Input, InputLabel } from '@material-ui/core';
import {  } from '@material-ui/core';

import './App.css';
import db from './firebase'

function App() {
  const [todos, setTodos] = useState(['abc']);
  const [input, setInput] = useState('');
  

  useEffect(() => {
db.collection('todos').onSnapshot(snapshot => {
  // console.log(snapshot.docs.map(doc => doc.data()));
  setTodos(snapshot.docs.map(doc => doc.data().todo))
})
  }, []);

  const addTodo = (event) =>{
    event.preventDefault(); //will stop refesh
    console.log('Im working!!!');
    setTodos([...todos, input]);
    setInput('');
  }
  return (
     <div className="App">
     <h1>Hello  Ravi!! Lets Createa to do App</h1>
     <form>
    
     <FormControl>
      <InputLabel > ✅ Write a to do</InputLabel>
       <Input value = {input} onChange={event => setInput(event.target.value)} />
    </FormControl>
     {/* <button type = "submit" onClick={addTodo}>Add Todo</button> */}
     <Button disabled={!input} type = "submit" onClick={addTodo} variant="contained" color="primary">
  Add Todo
</Button>
     </form>



  <ul>
       {todos.map(todo => (
         <Todo text={todo} />
      // <li>{todo}</li>
      ))}
     </ul>
    </div>
  );
}

export default App;
