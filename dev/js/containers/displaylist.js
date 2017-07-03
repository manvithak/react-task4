import React,{Component} from 'react';
import {connect} from 'react-redux';
import MyInput from '../components/MyInput';
import {DeleteTodo,EditTodo} from '../actions/add-todo';
import {bindActionCreators} from 'redux';

class DisplayList extends Component{
  constructor(){
    super();
    this.state = {
      checkSubmit : false,
      radioSubmit : false,
      disableCheck: false,
      disableRadio: false,
      toDelete:[],
      toEdit:''
    }
    this.handleCheck = this.handleCheck.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }
  handleCheck(e){
    var list = this.state.toDelete.slice();
    list.push(e.target.id);
    this.setState({
      disableRadio: true,
      checkSubmit: true,
      toDelete:list
    })
    e.stopPropagation();
    //e.preventDefault();
  }
  handleRadio(e){
    this.setState({
      radioSubmit: true,
      disableCheck: true,
      toEdit:e.target.id
    })
  //  e.preventDefault();
  }
  handleDeleteClick(e){
      //var id = e.target.id;
      var list = this.state.toDelete.slice();
      this.props.DeleteTodo(list);
      list.splice(0,list.length);
      this.setState({
        toDelete:list
      })
      e.preventDefault();

  }
  handleEditClick(e){
    var id = e.target.id;
    this.props.EditTodo(id);
    e.preventDefault();
  }
  render(){
    if (!this.props.todos) {
            return (<div>The List is...</div>);
        }
    return(
    <div>
      {this.props.todos.map((todos,index) => {
        return(
          <div key = {index}>
            <input type = 'checkbox' id = {index} name = 'toDelete' onChange = {this.handleCheck}
              disabled = {this.state.disableCheck}/>
            <input type = 'radio' id = {index} name = 'toEdit' value = {todos.todo}
              onChange = {this.handleRadio} disabled = {this.state.disableRadio}/>
            <li>{todos.todo} </li>
          </div>
        )
      })}
      <button disabled = {!this.state.checkSubmit} id = {this.state.toDelete}
         onClick = {this.handleDeleteClick}>Delete</button>
      <button disabled = {!this.state.radioSubmit} id = {this.state.toEdit}
        onClick = {this.handleEditClick}>Edit</button>
    </div>
  )
  }
}

function mapStateToProps(state){
  console.log(state.todo.todoList);
  return{
    todos:state.todo.todoList
  }
}
function matchDispatchToProps(dispatch){
  return bindActionCreators({
    DeleteTodo:DeleteTodo,
    EditTodo:EditTodo
  },dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(DisplayList);
