import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
// import NavBar from './components/NavBar'
// import CreateEvents from './components/CreateEvents'

//TO-DO: 
//connect the back end with the front end
//we will send quary parameters to the back end to display the information to the front end 
//also, default we will display all the events already in our DB

function App() {

  const checkConnection = async (e) => {
		// e.preventDefault();
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
      {/* <NavBar /> */}
      <HomePage />
      {/* <CreateEvents /> */}

    </div>
  
  )
}

export default App
