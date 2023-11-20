import { useState } from "react";
import GlobalStyle from "./globalStyles";
import { StyledApp, Content } from "./app.styled";
import Search from "./components/search/search";
import UserCard from "./components/user-card/user-card";
import Loader from "./components/loader/loader";

function App() {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <StyledApp>
      <GlobalStyle />
      <Search setData={setData} setIsLoading={setIsLoading} />
      <Content $isLoading={isLoading}>
        {/* Сортировка, если есть data и !isLoading */}

        {isLoading ? (
          <Loader />
        ) : (
          data?.items?.map((el: any, index: number) => {
            return <UserCard key={index} userData={el} id={index} />;
          })
        )}
      </Content>
    </StyledApp>
  );
}

export default App;
