import { useState } from "react";
import { Wrapper, SearchIcon, SearchInput, Button } from "./search.styled";
import { ReactComponent as SearchLogo } from "../../assets/img/search-square-svgrepo-com.svg";
import { getUser } from "../../api";

interface SearchProps {
  setData: (params: any) => void;
}

function Search({ setData }: SearchProps) {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleButtonClick = () => {
    getUser(searchValue).then((responseData) => {
      setData(responseData);
      console.log(responseData);
    });
  };

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
      <Button onClick={handleButtonClick}>Поиск</Button>
    </Wrapper>
  );
}

export default Search;
