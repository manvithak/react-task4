import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Form } from 'formsy-react';
import {AddTodo} from '../actions/add-todo';
import MyInput from '../components/MyInput';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class TodoForm extends Component{
  constructor(props) {
    super(props);
    this.state={
      canSubmit:false
    }
    this.enableButton = this.enableButton.bind(this);
    this.disableButton = this.disableButton.bind(this);
    this.submit = this.submit.bind(this);
  }

  submit(data){
    this.refs.form.reset();
    this.props.AddTodo(data);
  }
  enableButton() {
    this.setState({ canSubmit: true });
  }
  disableButton() {
    this.setState({ canSubmit: false });
  }

  render() {
    return (
      <Form onSubmit={this.submit} ref='form' onValid={this.enableButton} onInvalid={this.disableButton} className="login">
        <MyInput value={this.props.data} name="todo" title="Todo"  required />
        <button type="submit" disabled={!this.state.canSubmit}>Add</button>
      </Form>
    );
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({AddTodo: AddTodo}, dispatch);
}
function mapStateToProps(state){
  //console.log(state.todo.data);
  return{
    data:state.todo.data
  }
}
export default connect(mapStateToProps,matchDispatchToProps)(TodoForm);
