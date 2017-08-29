import React, {Component} from 'react';

import Table from './components/table';
import Form from './components/form';
class App extends Component {
  constructor(props) {
    super(props);


} 
  //you can't update state from render 
  render() {

    return (

      <div>
      <Form />
      <Table />
      </div>
      )
  }
}
export default App;