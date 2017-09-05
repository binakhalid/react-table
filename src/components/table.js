import React, { Component } from 'react';
import Data from '../data';

class Table extends Component {
	constructor(props) {
		super(props);
		this.state = { data: Data, button: false }

	}

	getData(event) {
		event.preventDefault();
		const name = this.refs.name.value;
		const email = this.refs.email.value;
		const phone = this.refs.phone.value;
		if (name === "", email === "", phone === "") {
			alert("Please add something..")
		} else {
			console.log("getData is running: ", name, email, phone);
			let data = Data;
			data.unshift({ name: name, email: email, phone: phone });
			this.setState({ data: data })
			this.refs.name.value = "";
			this.refs.email.value = "";
			this.refs.phone.value = "";
			this.refs.button.value = "Submit"
		}
	}
	editItem(i) {
		let data = this.state.data.map((res, i) => {
			return res
		})
		this.state.data.splice(i,1);
		this.setState({
			data:this.state.data,
			button: true
		})
		// var array = [1,2,3,4,5];
		// var indexNumber;
		// indexNumber = array[0] // 1
		let name = data[i].name;
		let email = data[i].email;
		let phone = data[i].phone;
		this.refs.name.value = name;
		this.refs.email.value = email;
		this.refs.phone.value = phone;
		this.refs.button.value = "SAVE"
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
						<table className="table table-bordered">
							<thead>

							<tr>
									<th >Name</th>
									<th >Email</th>
									<th >phone</th>
									<th>Actions</th>
								</tr>
								
							</thead>
				
							<tbody>
							
								<tr>
						
									<td>
										<input type="name"  ref="name" placeholder="Full name" className="form-control" data-align="center" required />
							</td>
									<td>
										<input type="email" id="inputEmail"   ref="email"  placeholder="E-mail address" className="form-control" data-align="center" required />
									</td>
									<td>
										<input type="number"  min="0" data-bind="value:replyNumber"  ref="phone" placeholder="Phone number" className="form-control" data-align="center" required />
									</td>
									<td>
										<input className="btn btn-default" type="submit" onClick={(event) => { this.getData(event) }} ref="button" />
									</td>
								
								</tr>
									
								
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