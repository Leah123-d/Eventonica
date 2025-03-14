import { useState, useReducer, useEffect } from 'react'
import './App.css'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import CreateEvents from './components/CreateEvents'

const initialState = {
  loading: true,
} 

function reducer(state, action){
  switch (action.type){
    case "SET_LOADING":
      return {...state, loading: action.payload };
    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer,initialState);

  const [newEvent, setNewEvent] = useState(
    {
      title: "",
      details:"",
      venue:"",
      extras:"",
    });
  
  // const [errorHandle, setErrorHandle] = useState(false);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [addEvent, setAddEvent] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [seraching, setSearching] = useState(false)
  const [deleteConfirmation, setDeleteConfirmation] = useState("");

  const handleFilterChange = (e) => {
    setFilterText(e.target.value); //as the user types we will update the filterText state
  }

//we will set up conditional redering to show the result
  const filterSubmit = (e) => {
    e.preventDefault();
    setSearching(true);

    const searchValues = filterText.trim().toLowerCase();
    if(!searchValues){
      window.alert("please enter a serach value");
      return
    }

    if(!currentEvents || Object.keys(currentEvents).length === 0){
      console.log("no searchable events found");
        return;
    }
    const eventsArray = Object.values(currentEvents) //converting the object into an array
    const validEvents = eventsArray.filter(event => event.title && event.details);

    const match = validEvents.filter(event => 
      event.title.toLowerCase().includes(searchValues) || event.details.toLowerCase().includes(searchValues)
    );
  
    if(match.length > 0){
      return setFilteredEvents(match);
    } else {
      window.alert("no event matches found");
    }

  }


  //We are fetching the data that is at the url /api which at the backend is connection to the eventonica datbase
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
      dispatch({type: "SET_LOADING", payload:true});
      const events = await fetchCurrentEvents();
      setCurrentEvents(events);
      dispatch({type: "SET_LOADING", payload:false});
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
      {state.loading ?   (
        <p>Loading events ...</p>
      ) : (
        <>

          <NavBar
            filterSubmit={filterSubmit} 
            handleFilterChange={handleFilterChange}
            filterText={filterText}
            
          />
            <p colSpan="6" style={{ textAlign: "center" }}>{deleteConfirmation}</p>
            <div>
              {seraching && filteredEvents.length === 0 && <p>no matches found</p>}
              {filteredEvents.length > 0 && (
                <div>
                <h2>Search Results:</h2>
                <ul>
                  {filteredEvents.map((event, index) => (
                    <p>
                      
                      <strong>{event.title} : {event.details}</strong>
                    </p>
                  ))}
                </ul>
                </div>
              )} 
            </div>

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
