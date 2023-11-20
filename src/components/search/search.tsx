import { useState } from "react";
import { Wrapper, SearchIcon, SearchInput, Button } from "./search.styled";
import { ReactComponent as SearchLogo } from "../../assets/img/search-square-svgrepo-com.svg";
import { getUser } from "../../api";

interface SearchProps {
  setData: (params: any) => void;
  setIsLoading: (params: any) => void;
}

function Search({ setData, setIsLoading }: SearchProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const handleButtonClick = () => {
    setIsDisabled(true);
    setIsLoading(true);
    getUser(searchValue).then((responseData) => {
      setData(responseData);
      setIsDisabled(false);
      setIsLoading(false);
      console.log(responseData);
    });
  };

  const handleInput = (e: any) => {
    setSearchValue(e.target.value);
    if (!e.target.inputType && e.target.value === "") {
      setData(undefined);
    }
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
          handleInput(e);
        }}
      />
      <Button onClick={handleButtonClick} disabled={isDisabled}>
        Поиск
      </Button>
    </Wrapper>
  );
}

export default Search;
