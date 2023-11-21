import { useState } from "react";
import GlobalStyle from "./globalStyles";
import { StyledApp, Content } from "./app.styled";
import Search from "./components/search/search";
import UserCard from "./components/user-card/user-card";
import Loader from "./components/loader/loader";
import Filter from "./components/filter/filter";

function App() {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [filterState, setFilterState] = useState({
    0: true,
    1: false,
  });

  return (
    <StyledApp>
      <GlobalStyle />
      <Search setData={setData} setIsLoading={setIsLoading} />
      {data && !isLoading ? (
        <Filter filterState={filterState} setFilterState={setFilterState} />
      ) : (
        ""
      )}
      <Content $isLoading={isLoading}>
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
