import React from 'react';
import Valor from './Valor';
import Lista from './Lista';

class Formulario extends React.Component{
    constructor(props){
        super(props)
        this.state={}

    this.handleSubmit = this.handleSubmit.bind(this);
    }
      handleSubmit(event) {
        event.preventDefault();
      }
    render(){
    return(
        <form onSubmit={this.handleSubmit} className="Formu">
            <Valor Nombre="Valor"/>
            <Valor Nombre="TRM "/>
            <Lista />
            <br/>
            <input type="submit" value="Guardar" />
        </form>    
    )
    }
}
export default Formulario;