import "./App.css";
import React, { useState } from "react";
import PostsContainer from "./components/postsContainer/PostsContainer";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

export const ThemeContext = React.createContext({ darkMode: false, toggleDarkMode: () => {} });

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = (value) => setDarkMode(value);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });
  
  return (
    <ThemeProvider theme={theme}>
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <div className={`App ${darkMode ? 'dark' : 'light'}`}>
          <PostsContainer />
        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
