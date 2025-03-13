function CreateEvent(){
  return(
    <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">Creat your Event!</h2>
    </div>
    <form className="mt-6 flex flex-col gap-2 text-xs">
      <label htmlFor="eventTitle">Event Name</label>
      <input id="eventTitle" type="text" placeholder="Type here" className="input" />

      <label htmlFor="description">Description</label>
      <input id="description" type="text" placeholder="Type here" className="input" />

      <label htmlFor="venue">Venue</label>
      <input id="venue" type="text" placeholder="Type here" className="input" />

      <label htmlFor="extras">Additional details</label>
      <textarea id="extras" className="textarea" placeholder="Bio"></textarea>


    </form>
    <div className="mt-6">
      <button className="btn btn-primary btn-block">Subscribe</button>
    </div>
  </div>
</div>
    

  )

}

export default CreateEvent