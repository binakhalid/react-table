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
		if (name, email, phone === "") {
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
	editItem(i) {
		let data = this.state.data.map((res, i) => {
			return res
		})
		console.log(data)
	}
	removeItem(i) {
		console.log(i)
		this.state.data.splice(i, 1);
		this.setState({
			data: this.state.data
		})
	}
	render() {

		let myData = this.state.data.map((res, i) => {
			return (<tr key={i}>
				<td>{res.name}</td>
				<td>{res.email}</td>
				<td>{res.phone}</td>
				<td>
					<button className="glyphicon glyphicon-pencil " onClick={() => this.editItem(i)}></button>
					<button className="glyphicon glyphicon-trash " onClick={() => this.removeItem(i)}></button>
				</td>



			</tr>)
		})
		return (

			<div>
				<div>
					<div className="container">
						<nav className="navbar navbar-light bg-faded ">
							<h1 className="navbar-brand mb-0  ">Nord Software</h1>
						</nav>
<table>
						<tbody className=" table-nonfluid">
							<tr className="new table-nonfluid" id="new">
								<td>
									<input type="text" required ref="name" className="form-control" />
								</td>
								<td>
									<input type="text" required ref="email" className="form-control" />
								</td>
								<td>
									<input type="text" required ref="phone" className="form-control" />
								</td>

								<td>
									<button className="btn btn-default" onClick={(event) => { this.getData(event) }}>Add new</button>
								</td>
							</tr>
							<tr>


								<th className="text-center">Name</th>
								<th className="text-center">Email</th>
								<th className="text-center">phone</th>

							</tr>

						</tbody>
						</table>


						<table className="table table-bordered">

							<tbody>
								{myData}

							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}
export default Table;