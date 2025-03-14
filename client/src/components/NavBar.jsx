import { useState } from 'react'

function NavBar({filterText, handleFilterChange, filterSubmit }){

  return(
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Eventonica!</a>
      </div>
      <div className="navbar-end">
        <form onSubmit={filterSubmit}>
          <label className="input" htmlFor='filterText'>
            <input 
              id="filterText"
              type="text" 
              name="filterText"
              placeholder="search" 
              value={filterText}
              onChange={(e) => handleFilterChange(e)}
              />
          </label>
          <button className="btn btn-outline btn-primary" >Search</button>
        </form>
        
      </div>
    </div>   
  )
}
export default NavBar