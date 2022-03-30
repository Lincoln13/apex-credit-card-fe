import './App.css';
import AddCreditCard from './components/AddCreditCard';
import ShowCreditCards from './components/ShowCreditCards';
import React from "react";
import { useState } from 'react';

const App = () => {

  const url = 'http://localhost:8080/aon'
  const [errorMessage, setErrorMessage] = useState('');
  const [messageClassName, setMessageClassName] = useState('');

  // Add Task
  const addCreditCard = async (creditCard) =>  {
    
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(creditCard)
    })

    const data = await res.json()
    setErrorMessage(data.message);

    if (400 === res.status || 500 === res.status) {
      setMessageClassName('error')
    } else if (200 === res.status) {
      setMessageClassName('success')
    }
  }

  return (
    <div className="container">
      <AddCreditCard onAdd={addCreditCard} />
      {errorMessage && (
        <p className={messageClassName}>{errorMessage}</p>
      )}
      <ShowCreditCards /> 
    </div>
  );
}

export default App;
