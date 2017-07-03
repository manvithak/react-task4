import React from 'react';
import Formsy from 'formsy-react';
import {HOC} from 'formsy-react';
class MyInput extends React.Component{
  componentWillReceiveProps(nextProps){
    this.textInput.focus();
    //console.log(this.textInput.value)
  }
  componentWillMount(){
    this.props.setValue(this.props.value);
  }
  render() {
    return (
      <div >
        <label htmlFor={this.props.name}>{this.props.title}:</label>
        <input
          type={this.props.type || 'text'}
          name={this.props.name}
          ref={(input) => { this.textInput = input; }}
          onChange={(e) => this.props.setValue(e.target.value)}
          value={this.props.getValue()}
        />

      </div>
    );
  }
}

export default HOC(MyInput);
