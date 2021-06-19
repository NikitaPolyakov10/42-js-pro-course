import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from './actions';

const localStorageTodos = (localStorage.getItem('todoList') && JSON.parse(localStorage.getItem('todoList'))) || [];

const initialState = {
  todos: localStorageTodos,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodos = state.todos.concat(action.payload);
      return {
        ...state,
        todos: newTodos,
      };
    }
    case TOGGLE_TODO: {
      return {
        ...state,
        todos: state.todos.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        }),
      };
    }
    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload),
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};
