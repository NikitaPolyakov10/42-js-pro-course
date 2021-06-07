import "./App.css";
import React from "react";
import PostsContainer from "./components/PostsContainer/PostsContainer";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <PostsContainer />
      </ThemeProvider>
    </div>
  );
}

export default App;
