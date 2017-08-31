import React, { Component } from 'react';
import Data from '../data';

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = { data: Data }

	}

	getData(event) {
		event.preventDefault();
		const name = this.refs.name.value;
		const email = this.refs.email.value;
		const phone = this.refs.phone.value;
		if(name, email, phone === "") {
			alert("Please add something..")
		} else {
		console.log("getData is running: ", name, email, phone);
		let data = Data;
		data.unshift({ name: name, email: email, phone });
		this.setState({ data: data })
		this.refs.name.value = "";
		this.refs.email.value = "";
		this.refs.phone.value = "";
	}
}
removeItem() {
	console.log("remove button is functioning properly")
	this.state.data.splice(1, 3);
}
	render() {

		let myData = this.state.data.map((res, i) => {
			return (<tr key={i}>

				<td>{res.name}</td>
				<td>{res.email}</td>
				<td>{res.phone}</td>
				<td>
					<button className="glyphicon glyphicon-pencil "></button>
					<button className="glyphicon glyphicon-trash " onClick={() => this.removeItem()}></button>
				</td>



			</tr>)
		})
		return (

			<div>
				<div>
					<div className="panel panel-primary">
						<div className="panel-heading"><h3>Form</h3></div>
						<div className="row">
							<div className="well">
								<form className="form-inline" role="form">
									<div className="form-group " >
										<input type="name" className="form-control" ref="name" placeholder="Full name" />
										<input type="name" className="form-control" ref="email" placeholder="E-mail address" />
										<input type="name" className="form-control" ref="phone" placeholder="Phone number" />
									</div>
									<button className="btn btn-default" onClick={(event) => { this.getData(event) }}>Add new</button>
								</form>
							</div>
						</div>
					</div>
				</div>

				<div className="panel panel-primary">
					<div className="panel-heading"><h3>Participants List</h3></div>

					<table className="table table-bordered">
						<thead>
							<tr>

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