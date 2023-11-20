import { useState } from "react";
import { Wrapper, SearchIcon, SearchInput, Button } from "./search.styled";
import { ReactComponent as SearchLogo } from "../../assets/img/search-square-svgrepo-com.svg";

interface SearchProps {}

function Search() {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <Wrapper>
      <SearchIcon>
        <SearchLogo />
      </SearchIcon>
      <SearchInput
        type="search"
        placeholder="Введите логин"
        onInput={(e: any) => {
          setSearchValue(e.target.value);
        }}
      />
      <Button
        onClick={() => {
          console.log(searchValue);
        }}
      >
        Поиск
      </Button>
    </Wrapper>
  );
}

export default Search;
