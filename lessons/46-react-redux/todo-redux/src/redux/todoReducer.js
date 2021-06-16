const initialState = {
  todos: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo = {
        id: new Date().valueOf().toString(),
        text: action.payload,
        completed: false,
      };
      return {
        ...state,
        todos: [newTodo].concat(state.todos),
      };
    }
    case 'TOGGLE_TODO': {
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
    case 'DELETE_TODO': {
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
