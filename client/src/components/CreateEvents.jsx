function CreateEvent({ createEvent, handleChange, closeAddEvent }){

  return(
    <div className="card w-96 bg-base-100 shadow-sm" onClick={(e) => {
      if(e.target.className === 'card')closeAddEvent()}}>
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">Creat your Event!</h2>
        </div>
      <form onSubmit={handleChange}  className="mt-6 flex flex-col gap-2 text-xs"> 
        {/* //the form data will update the state in the app component */}
        <label htmlFor="eventTitle">Event Name</label>
        <input id="eventTitle" type="text" placeholder="Type here" className="input" />

        <label htmlFor="description">Description</label>
        <input id="description" type="text" placeholder="Type here" className="input" />

        <label htmlFor="venue">Venue</label>
        <input id="venue" type="text" placeholder="Type here" className="input" />

        <label htmlFor="extras">Additional details</label>
        <textarea id="extras" className="textarea" placeholder="Parking Instructions.... Other event details...."></textarea>
      </form>
      <div className="mt-6">
        <button onClick={createEvent}className="btn btn-primary btn-block">Create Event</button>
        {/* this will run the function to post the event to the DB  */}
      </div>
      </div>
    </div>
  )

}

export default CreateEvent