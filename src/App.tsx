import { useState, useEffect } from "react";
import GlobalStyle from "./globalStyles";
import { StyledApp, Content } from "./app.styled";
import Search from "./components/search/search";
import UserCard from "./components/user-card/user-card";

function App() {
  const [data, setData] = useState<any>();

  return (
    <StyledApp>
      <GlobalStyle />
      <Search setData={setData} />
      <Content>
        {data?.items.map((el: any, index: number) => {
          return <UserCard key={index} userData={el} />;
        })}
      </Content>
    </StyledApp>
  );
}

export default App;
