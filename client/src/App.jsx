import { useState, useReducer, useEffect } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import CreateEvents from './components/CreateEvents'

//TO-DO: 
//1.need a function to add an event 
  //when a button is clicked it will run the post query from the backend to create the event based on its id
  //we will be passing the event from the component to the parent in a call back function

//overall, can we have a useReducer hook handle both states? 
//then we would send a fetch to trigger the query? Then if the response is successful we would a send message 
//to the front end. 

//a button will be needed to edit the event 
//a button will be needed to delete the event 
//the submit on the form will need to post to the database so that information will send to the backend 

function App() {
  const [newEvent, setNewEvent] = useState(
    {
      title: "",
      details:"",
      venue:"",
      extras:"",
    });
  
  const [errorHandle, setErrorHandle] = useState(false);
  const [loading, setLoading] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const [addEvent, setAddEvent] = useState(false);

  //We are fetching the data that is at the url /api which at the backend is connection to the eventonica databse

  const fetchCurrentEvents = async () => { 
    try {
      const res = await fetch("/events");
      if(!res.ok) throw new Error("Failed to fetch events.");
      const data = await res.json();
      console.log("Fetched Current Events: ", data)
      return data;
    } catch(error) {
      console.error("Error fetching events: ", error);
      setErrorHandle(true); //would want to build out sending this to an error component 
      return [];
    }
  };

  useEffect(() => {
    const getEvents = async () => {
      setLoading(true);
      const events = await fetchCurrentEvents();
      setCurrentEvents(events);
      setLoading(false);
    };
    getEvents();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent (prevEvent => ({
      ...prevEvent,
      [name]: value
    }));
  };
    //with create event we will have an onsubit that is doing somethign with the data
  const createEvent = async (e) => {
    e.preventDefault();
    console.log("create event function connected!")
    console.log("New Event submitted:", newEvent);

    try{
    const response = await fetch("/events", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEvent),
    });
    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`);
    } 
    const data = await response.json();
    console.log("fetched data:", data);

    setNewEvent(data); //storing the database response
    setAddEvent(false); // to close the event form after submitted an event

    // if(data.response_code != 0){
    //   console.log("no results found");
      // setErrorHandle(true); //will come back to setting this error handling depending on response from the backend
    //}
    } catch(error){
      console.error("error fetching data: ", error);
    } 
  };

  const deleteEvent = async (id) => {
    console.log("deleting event...");
      try{
      const url = `/events/${id}`; 
      const response = await fetch(url, {method: 'DELETE'});
        if(!response.ok){
          throw new Error('something went wrong')
        }
        setCurrentEvents((prevEvents) => prevEvents.filter(event => event.id !== id));
        setDeleteConfirmation("Event successfully deleted!");
      }
      catch(error) {
        console.log(error);
        //handle error state here too
      }
  }

  return (
    <div className="App">
      {loading ? (
        <p>Loading events ...</p>
      ) : (
        <>

          <NavBar />
          <p colSpan="6" style={{ textAlign: "center" }}>{deleteConfirmation}</p>
          <HomePage 
          currentEvents={currentEvents}
          eventID={currentEvents.id}
          deleteEvent={deleteEvent}/>
          <button onClick={() => setAddEvent(true)} className="btn btn-primary">Add event</button>
          
          {addEvent && <CreateEvents 
          closeAddEvent = {() => setAddEvent(false)} 
          createEvent={createEvent} 
          newEvent={newEvent}
          handleChange={handleChange}/>}
        </>
      )}
    </div> 
  );
}
export default App
