export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: text,
  };
};
export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: id,
  };
};
export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};

export const changeFilter = (filter) => {
  return {
    type: CHANGE_FILTER,
    payload: filter,
  };
};
