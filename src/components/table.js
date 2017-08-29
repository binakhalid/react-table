import React, {Component}	from 'react';
import Data from '../data';

class Table extends Component {
	constructor(props) {
		super(props);
	}


	render() {
let myData = Data.map((res, i) => {
	return (<tr key={i}>
	<td>{res.id}</td>
	<td>{res.name}</td>
	<td>{res.email}</td>
	<td>{res.phone}</td>

	</tr>)
})
		return(

			<div>
<div className="panel panel-primary">
    <div className="panel-heading"><h3>Participants List</h3></div>
  
			<table className="table table-bordered">
  <thead>
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>Email</th>
      <th>phone</th>
    </tr>
  </thead>
  <tbody>
    {myData}
    
  </tbody>
</table>
  </div>
</div>			
			)
	}
}
export default Table;