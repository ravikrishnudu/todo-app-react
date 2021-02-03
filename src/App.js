import React,{ usestate } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
     <h1>heghgllo  Ravi</h1>
     <input />
     <button>Add Todo</button>
     <ul>
      <li>Take dogs for walk</li>
      <li>Take the rubbish</li>
     </ul>
    </div>
  );
}

export default App;
