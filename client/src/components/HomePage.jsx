function HomePage(){
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
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
          </tr>
          {/* row 2 */}
          <tr>
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
          </tr>
          {/* row 4 */}
          <tr>
          <th>4</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
          </tr>
          {/* row 5 */}
          <tr>
          <th>5</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
          </tr>
          {/* row 5 */}
          <tr>
          <th>6</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default HomePage