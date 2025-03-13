import { useState } from 'react'
import './App.css'
import HomePage from './components/HomePage'
// import NavBar from './components/NavBar'
// import CreateEvents from './components/CreateEvents'

//TO-DO: 
//connect the back end with the front end
//we will send quary parameters to the back end to display the information to the front end 
//also, default we will display all the events already in our DB

//information from existing events will be sent to the front end 
//a button will be needed to edit the event 
//a button will be needed to delete the event 
//the submit on the form will need to post to the database so that information will send to the backend 

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
      
      {/* <NavBar /> */}
      <HomePage />
      {/* <CreateEvents /> */}

    </div>
  
  )
}

export default App
