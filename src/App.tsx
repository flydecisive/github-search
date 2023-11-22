import { useState, useEffect } from "react";
import GlobalStyle from "./globalStyles";
import {
  StyledApp,
  Content,
  Message,
  SearchInfo,
  PagesWrapper,
  PagesItem,
} from "./app.styled";
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
  const [pagesCount, setPagesCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pagesState, setPagesState] = useState<any>();
  const [cards, setCards] = useState<any>();
  const [prevPage, setPrevPage] = useState<number>(0);

  useEffect(() => {
    if (responseData) {
      setPagesCount(Math.ceil(responseData?.items?.length / 15));
      setCurrentPage(1);

      if (filterState[0]) {
        setData(responseData?.items);
      }

      if (filterState[1]) {
        setData([...responseData?.items].reverse());
      }
    } else {
      setData(undefined);
      setPagesCount(0);
      setCurrentPage(0);
    }

    if (responseData?.items?.length === 0) {
      setMessage("Пользователь не найден");
    } else {
      setMessage("");
    }
  }, [filterState, responseData]);

  useEffect(() => {
    if (pagesCount) {
      const newPagesState: any = {};
      for (let i = 1; i <= pagesCount; i++) {
        if (i === 1) {
          newPagesState[i] = true;
          continue;
        }

        newPagesState[i] = false;
      }

      setPagesState(newPagesState);
      setPrevPage(1);
    }
  }, [pagesCount]);

  useEffect(() => {
    switch (currentPage) {
      case 1:
        setCards(data?.slice(0, currentPage * 15));
        break;
      case 2:
        setCards(data?.slice(15, currentPage * 15));
        break;
      case 3:
        setCards(data?.slice(30, currentPage * 15));
        break;
      case 4:
        setCards(data?.slice(45, currentPage * 15));
        break;
      case 5:
        setCards(data?.slice(60, currentPage * 15));
        break;
      case 6:
        setCards(data?.slice(75, currentPage * 15));
        break;
      case 7:
        setCards(data?.slice(90, currentPage * 15));
        break;
      default:
        setCards(data?.slice(0, currentPage * 15));
        break;
    }
  }, [data, currentPage]);

  return (
    <StyledApp>
      <GlobalStyle />
      <Search setResponseData={setResponseData} setIsLoading={setIsLoading} />
      {!isLoading && data ? (
        <SearchInfo>{`Показано: ${data?.length} Всего результатов: ${responseData?.total_count}`}</SearchInfo>
      ) : (
        ""
      )}
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
          cards?.map((el: any, index: number) => {
            return <UserCard key={index} userData={el} id={index} />;
          })
        )}
      </Content>
      {pagesCount && pagesState && !isLoading ? (
        <PagesWrapper>
          {Object.keys(pagesState).map((el, index) => (
            <PagesItem
              key={index + 1}
              id={index + 1}
              $isActive={pagesState[index + 1]}
              onClick={(e: any) => {
                setCurrentPage(Number(e.target.id));
                setPagesState({
                  ...pagesState,
                  [e.target.id]: true,
                  [prevPage]: false,
                });
                setPrevPage(e.target.id);
              }}
            >
              {index + 1}
            </PagesItem>
          ))}
        </PagesWrapper>
      ) : (
        ""
      )}
    </StyledApp>
  );
}

export default App;
