import './App.css';
import React, { useEffect, useState } from 'react';
import { Login } from './Login';
import { Register } from './Register';

const API = "http://localhost:4000/webcode"

function App(){

  const [currentForm, setCurrentForm] = useState([]);
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

 
  useEffect(() => {
    fetch(`${API}/data`)
    .then((data) => data.json())
    .then((wbc) => setCurrentForm(wbc));
  }, [])

  return (
    <div className="App">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;
