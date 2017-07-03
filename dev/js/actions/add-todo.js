export const AddTodo = (data) => {
  console.log('action fired');
  return{
    type:'add-todo',
    todo:data
  }
};

export const DeleteTodo = (list) => {
  console.log(list);
  return{
    type:'delete-todo',
    list: list
  }
};

export const EditTodo = (id) => {
  return{
    type:'edit-todo',
    id: id
  }
};
