import { useState, useEffect } from "react";
import GlobalStyle from "./globalStyles";
import StyledApp from "./app.styled";
import Search from "./components/search/search";

function App() {
  return (
    <StyledApp>
      <GlobalStyle />
      <Search />
    </StyledApp>
  );
}

export default App;
