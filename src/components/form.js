import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
  }
  getData(event) {
    event.preventDefault();
    const name = this.refs.name.value;
    const email = this.refs.email.value;
    const phone = this.refs.phone.value;
    console.log("getData is running: ", name, email, phone);
  }
  render() {
    return (
      <div>
        <div className="panel panel-primary">
          <div className="panel-heading"><h3>Form</h3></div>
          <div className="row">
            <div className="well">
              <form className="form-inline" role="form">
                <div className="form-group " >
                  <input type="name" className="form-control" ref="name" placeholder="Enter name" />
                  <input type="name" className="form-control" ref="email" placeholder="Enter email" />
                  <input type="name" className="form-control" ref="phone" placeholder="Enter phone" />
                </div>
                <button className="btn btn-default" onClick={(event) => {this.getData(event)}}>Add new</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    )
  }


}
export default Form;
