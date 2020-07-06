import React from 'react';

class Valor extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: '',
            counter: 0
            
        }

    this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: (parseInt(event.target.value) ? parseInt(event.target.value): '')});
    }
    render(){
    return(
            <label>
            <strong>{this.props.Nombre}</strong>&nbsp;&nbsp;
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            <br/><br/>
            </label> 
    )
    }

}
export default Valor;