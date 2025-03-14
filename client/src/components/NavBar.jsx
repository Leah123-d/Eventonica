import { useState } from 'react'

function NavBar(){


  return(
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Eventonica!</a>
      </div>
      <div className="navbar-end">
      <label className="input">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
        <input 
          type="text" 
          placeholder="search" 
          // value={filterText}
          // onChange={handleFilterChange}
          />
      </label>
      </div>
    </div>   
  )
}
export default NavBar