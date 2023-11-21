import { useState, useEffect } from "react";
import GlobalStyle from "./globalStyles";
import { StyledApp, Content, Message } from "./app.styled";
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
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (responseData) {
      if (filterState[0]) {
        setData(responseData?.items);
      }

      if (filterState[1]) {
        setData([...responseData?.items].reverse());
      }
    } else {
      setData(undefined);
    }

    if (responseData?.items?.length === 0) {
      setMessage("Пользователь не найден");
    } else {
      setMessage("");
    }
  }, [filterState, responseData]);

  return (
    <StyledApp>
      <GlobalStyle />
      <Search setResponseData={setResponseData} setIsLoading={setIsLoading} />
      {data?.length !== 0 && data && !isLoading ? (
        <Filter filterState={filterState} setFilterState={setFilterState} />
      ) : (
        ""
      )}
      <Content $isLoading={isLoading}>
        {!isLoading && message.length !== 0 ? <Message>{message}</Message> : ""}
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
