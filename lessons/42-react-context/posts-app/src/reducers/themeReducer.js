const THEME_ENUMS = ["light", "dark"];

const initialState = {
  theme: "",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_THEME": {
      const theme = THEME_ENUMS.includes(action.payload.toLowerCase())
        ? action.payload
        : THEME_ENUMS[0];
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
