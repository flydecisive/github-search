import { useState } from "react";
import { Wrapper, SearchIcon, SearchInput, Button } from "./search.styled";
import { ReactComponent as SearchLogo } from "../../assets/img/search-square-svgrepo-com.svg";
import { getUser } from "../../api";

interface SearchProps {
  setResponseData: (params: any) => void;
  setIsLoading: (params: any) => void;
}

function Search({ setResponseData, setIsLoading }: SearchProps) {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleButtonClick = () => {
    setIsLoading(true);
    getUser(searchValue).then((responseData) => {
      setResponseData(responseData);
      setIsDisabled(false);
      setIsLoading(false);
    });
  };

  const handleInput = (e: any) => {
    setSearchValue(e.target.value);

    if (e.target.value.length > 0) {
      setIsDisabled(false);
    }

    if (!e.target.inputType && e.target.value === "") {
      setResponseData(undefined);
      setIsDisabled(true);
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
