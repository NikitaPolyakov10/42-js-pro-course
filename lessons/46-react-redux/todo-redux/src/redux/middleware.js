import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './actions';

export const storageMiddleware = (store) => (next) => (action) => {
  if (action.type === ADD_TODO) {
    const newTodo = {
      id: new Date().valueOf().toString(),
      text: action.payload,
      completed: false,
    };
    localStorage.setItem('todoList', JSON.stringify(store.getState().todoReducer.todos.concat(newTodo)));
    action.payload = newTodo;
  } else if (action.type === DELETE_TODO) {
    let todos = store.getState().todoReducer.todos;
    todos = todos.filter((item) => item.id !== action.payload);
    localStorage.setItem('todoList', JSON.stringify(todos));
  } else if (action.type === TOGGLE_TODO) {
    let todos = store.getState().todoReducer.todos;
    todos = todos.map((item) => {
      if (item.id === action.payload) {
        return {
          id: item.id,
          text: item.text,
          completed: !item.completed,
        };
      }
      return item;
    });
    localStorage.setItem('todoList', JSON.stringify(todos));
  }

  return next(action);
};
