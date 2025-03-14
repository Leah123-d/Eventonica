function CreateEvents({ newEvent, handleChange, createEvent }){

  // thing to consider: I am seeing that the event is added to your backend, however, user does need to press refresh to see it on the front end
  return(
    <div className="card w-96 bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">Creat your Event!</h2>
        </div>
      <form onSubmit={createEvent} className="mt-6 flex flex-col gap-2 text-xs"> 
        {/* //the form data will update the state in the app component */}
        <label htmlFor="eventTitle">Event Name</label>
        <input id="eventTitle" type="text" placeholder="Type here" className="input" name="title" value={newEvent.title} onChange={handleChange} />

        <label htmlFor="description">Description</label>
        <input id="description" type="text" placeholder="Type here" className="input" name="details" value={newEvent.details} onChange={handleChange} />

        <label htmlFor="venue">Venue</label>
        <input id="venue" type="text" placeholder="Type here" className="input" name="venue" value={newEvent.venue} onChange={handleChange} />

        <label htmlFor="extras">Additional details</label>
        <textarea id="extras" placeholder="Parking Instructions.... Other event details...." className="textarea" name="extras" value={newEvent.extras} onChange={handleChange}></textarea>
      <div className="mt-6">
        <button className="btn btn-primary btn-block">Create Event</button>
        {/* this will run the function to post the event to the DB  */}
      </div>
      </form>
      </div>
    </div>
  )

}

export default CreateEvents