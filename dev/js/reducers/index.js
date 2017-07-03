import {combineReducers} from 'redux';
import AddTodoReducer from './addtodo-reducer';

 const allReducers = combineReducers({
   todo: AddTodoReducer
 });

export default allReducers;
