import { useState, useReducer, useEffect } from 'react'
import './App.css'
import HomePage from './components/HomePage'
// import NavBar from './components/NavBar'
// import CreateEvents from './components/CreateEvents'

//TO-DO: 
//I have data from the backend, however, I need to review the timing of displaying the information
//we will send quary parameters to the back end to display the information to the front end 
//also, default we will display all the events already in our DB

//information from existing events will be sent to the front end 
//a button will be needed to edit the event 
//a button will be needed to delete the event 
//the submit on the form will need to post to the database so that information will send to the backend 

function App() {

  const [newEvent, setNewEvent] = useState(
    {
      id: 7, //when I modify this I will add a plus one
      title: "",
      details:"",
      venue:"",
      extras:"",
    });
  const [errorHandle, setErrorHandle] = useState(false);
  const[currentEvents, setCurrentEvents] = useState([]);

  //We are fetching the data that is at the url /api which at the backend is connection to the eventonica databse
  useEffect(() => {
    const fetchCurrentEvents = async () => { 
    try {
      const res = await fetch('/events');
      const data = await res.json();
      console.log("Current Events: ", data)
      setCurrentEvents(data);
    } catch(error) {
      console.error('Error:', error);
    }
  };
  fetchCurrentEvents(); }, []);
  
  const handleChange = (e) => {
    setNewEvent ({
      ...newEvent,
      [e.target.name]: e.target.value
    })
  }

  const createEvent = async () => {
    console.log("New Event submitted:", newEvent);
    try{
    const response = await fetch(
      `/events?id=${newEvent.id}&title=${newEvent.title}&details=${newEvent.details}&venue=${newEvent.venue}&extras=${extras}`); 
    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`);
    } 
    const data = await response.json();
    console.log("fetched data:", data);
    setNewEvent(data); //storing the database response
    if(data.response_code != 0){
      console.log("no results found");
      // setErrorHandle(true); //will come back to setting this error handling depending on response from the backend
    }

    } catch(error){
      console.error("error fetching data: ", error);
    }
};

  return (
    <div className="App">
      
      {/* <NavBar /> */}
      <HomePage 
      currentEvents={currentEvents}/>
      {/* <CreateEvents /> */}
    </div> 
  )
}
export default App
