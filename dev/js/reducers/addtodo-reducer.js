import _ from 'lodash';
const intialUserState = {
  todoList:[]
}
export default function (state = intialUserState, action){
  //console.log(state.todoList);
  switch(action.type){

    case 'add-todo':
      let newlist = state.todoList.slice();
      newlist.push(action.todo);
      return {
        todoList : newlist,
      }
      break;

    case 'delete-todo':
      let deletelist = state.todoList.slice();
      let duplist = [];

      action.list.forEach(function(action,index){
        duplist[index] = deletelist[action];
      });
      deletelist = _.difference(deletelist, duplist);

      //deletelist.splice(action.id);
      return{
        todoList: deletelist,
      }
      break;

    case 'edit-todo':

      let editlist = state.todoList.slice();
      var data = editlist[action.id];
      console.log(data.todo);
      console.log(data.todo);
      var editlist = editlist.filter(function(element) {
        return element.todo !== data.todo;
      });
      return{
        todoList: editlist,
        data: data.todo
      }
      break;
  }
  return state;
}
