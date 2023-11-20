import { useState } from "react";
import { Wrapper, SearchIcon, SearchInput, Button } from "./search.styled";
import { ReactComponent as SearchLogo } from "../../assets/img/search-square-svgrepo-com.svg";
import { getUser } from "../../api";

interface SearchProps {
  setData: (params: any) => void;
}

function Search({ setData }: SearchProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <Wrapper>
      <SearchIcon>
        <SearchLogo />
      </SearchIcon>
      <SearchInput
        value={searchValue}
        type="search"
        placeholder="Введите логин"
        onInput={(e: any) => {
          setSearchValue(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          console.log(searchValue);
          getUser(searchValue).then((responseData) => {
            setSearchValue("");
            setData(responseData);
            console.log(responseData);
          });
        }}
      >
        Поиск
      </Button>
    </Wrapper>
  );
}

export default Search;
