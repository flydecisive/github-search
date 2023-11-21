import { useState, useEffect } from "react";
import GlobalStyle from "./globalStyles";
import { StyledApp, Content } from "./app.styled";
import Search from "./components/search/search";
import UserCard from "./components/user-card/user-card";
import Loader from "./components/loader/loader";
import Filter from "./components/filter/filter";

function App() {
  const [responseData, setResponseData] = useState<any>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [filterState, setFilterState] = useState({
    0: true,
    1: false,
  });

  useEffect(() => {
    if (responseData) {
      if (filterState[0]) {
        setData(responseData?.items);
      }

      if (filterState[1]) {
        setData([...responseData?.items].reverse());
      }
    }
  }, [filterState, responseData]);

  return (
    <StyledApp>
      <GlobalStyle />
      <Search setResponseData={setResponseData} setIsLoading={setIsLoading} />
      {data && !isLoading ? (
        <Filter filterState={filterState} setFilterState={setFilterState} />
      ) : (
        ""
      )}
      <Content $isLoading={isLoading}>
        {isLoading ? (
          <Loader />
        ) : (
          data?.map((el: any, index: number) => {
            return <UserCard key={index} userData={el} id={index} />;
          })
        )}
      </Content>
    </StyledApp>
  );
}

export default App;
