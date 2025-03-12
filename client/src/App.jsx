import { useState } from 'react'
import './App.css'

function App() {

  const checkConnection = async (e) => {
		e.preventDefault();
    try{
    const response = await fetch(`/events`); 
    const data = await response.json();
    console.log("connected to the backend") //store data in state 
    }catch(error){
    console.error("error fetching data: ", error)
  }}

  checkConnection();

  return (
    <div className="App">
      <h1>App setting up</h1>

    </div>
  
  )
}

export default App
