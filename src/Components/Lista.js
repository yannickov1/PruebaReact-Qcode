import React from 'react';
import ListaArray from './ListaArray';

const listItems = ListaArray.map((currentt) =>
    <option>{currentt.Descripcion}</option>);

class Lista extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ListaArray[0].Descripcion};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    render() {
      return (
          <label>
            <strong>Item</strong>&nbsp;&nbsp;&nbsp;
            <select value={this.state.value} onChange={this.handleChange}>
            {listItems}
            </select>
            <br/>
          </label>
      );
    }
  }

export default Lista;