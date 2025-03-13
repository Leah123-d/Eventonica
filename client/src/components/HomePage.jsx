import { TfiTrash } from "react-icons/tfi";

function HomePage({currentEvents}){

  // console.log({currentEvents});
  
  return(
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
          <th></th>
          <th>Event Name</th>
          <th>Description</th>
          <th>Venue</th>
          <th>Additional details</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
          <th>{currentEvents[0].id}</th>
          <td>{currentEvents[0].title}</td>
          <td>{currentEvents[0].details}</td>
          <td>{currentEvents[0].venue}</td>
          <td>{currentEvents[0].extras}</td>
          <TfiTrash />
          </tr>
          {/* row 2 */}
          <tr>
          <th>{currentEvents[1].id}</th>
          <td>{currentEvents[1].title}</td>
          <td>{currentEvents[1].details}</td>
          <td>{currentEvents[1].venue}</td>
          <td>{currentEvents[1].extras}</td>
          </tr>
          {/* row 3 */}
          <tr>
          <th>{currentEvents[2].id}</th>
          <td>{currentEvents[2].title}</td>
          <td>{currentEvents[2].details}</td>
          <td>{currentEvents[2].venue}</td>
          <td>{currentEvents[2].extras}</td>
          </tr>
          {/* row 4 */}
          <tr>
          <th>{currentEvents[3].id}</th>
          <td>{currentEvents[3].title}</td>
          <td>{currentEvents[3].details}</td>
          <td>{currentEvents[3].venue}</td>
          <td>{currentEvents[3].extras}</td>
          </tr>
          {/* row 5 */}
          <tr>
          <th>{currentEvents[4].id}</th>
          <td>{currentEvents[4].title}</td>
          <td>{currentEvents[4].details}</td>
          <td>{currentEvents[4].venue}</td>
          <td>{currentEvents[4].extras}</td>
          </tr>
          {/* row 5 */}
          <tr>
          <th>{currentEvents[5].id}</th>
          <td>{currentEvents[5].title}</td>
          <td>{currentEvents[5].details}</td>
          <td>{currentEvents[5].venue}</td>
          <td>{currentEvents[5].extras}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default HomePage