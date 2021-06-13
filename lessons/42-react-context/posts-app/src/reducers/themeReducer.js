const THEMES = ["light", "dark"];

const initialState = {
  theme: "",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_THEME": {
      const theme = THEMES.includes(action.payload.toLowerCase())
        ? action.payload
        : THEMES[0];
      return {
        ...state,
        theme,
      };
    }
    default:
      return state;
  }
};

export default themeReducer;
