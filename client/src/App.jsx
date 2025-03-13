import { useState, useReducer, useEffect } from 'react'
import './App.css'
import HomePage from './components/HomePage'
// import NavBar from './components/NavBar'
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
      id: 7, //when I modify this I will add a plus one
      title: "",
      details:"",
      venue:"",
      extras:"",
    });
  const [errorHandle, setErrorHandle] = useState(false);
  const [loading, setLoading] = useState(true);
  const[currentEvents, setCurrentEvents] = useState([]);

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
    setNewEvent ({
      ...newEvent,
      [e.target.name]: e.target.value
    })
  }

    //with create event we will have an onsubit that is doing somethign with the data
  const createEvent = async () => {
    console.log("create event function connected!")
    // console.log("New Event submitted:", newEvent);
    // try{
    // const response = await fetch(
    //   `/events?id=${newEvent.id}&title=${newEvent.title}&details=${newEvent.details}&venue=${newEvent.venue}&extras=${extras}`); 
    // if(!response.ok){
    //   throw new Error(`HTTP error! Status: ${response.status}`);
    // } 
    // const data = await response.json();
    // console.log("fetched data:", data);
    // setNewEvent(data); //storing the database response
    // if(data.response_code != 0){
    //   console.log("no results found");
    //   // setErrorHandle(true); //will come back to setting this error handling depending on response from the backend
    // }
    // } catch(error){
    //   console.error("error fetching data: ", error);
    // }
};
  const deleteEvent = async (id) => {
    console.log("deleting event...");
      try{
      const url = `/events/${id}`; 
      const response = await fetch(url, {method: 'DELETE'});
        if(!response.ok){
          throw new Error('something went wrong')
        }
        //can add a navigate to force back to the main page 
        //assume things went well
        console.log("event deletion successful!")
        setCurrentEvents((prevEvents) => prevEvents.filter(event => event.id !== id));
      }
      catch(error) {
        console.log(error);
      }
  }

  return (
    <div className="App">
      {loading ? (
        <p>Loading events ...</p>

      ) : (
        <>
          {/* <NavBar /> */}
          <HomePage 
          currentEvents={currentEvents}
          eventID={currentEvents.id}
          deleteEvent={deleteEvent}/>
          <CreateEvents 
          createEvent={createEvent} 
          handleChange={handleChange}/> 
        </>
      )}
    </div> 
  );
}
export default App
