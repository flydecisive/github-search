import { Wrapper, FilterItem } from "./filter.styled";

interface FilterProps {
  filterState: { 0: boolean; 1: boolean };
  setFilterState: (params: any) => void;
}

function Filter({ filterState, setFilterState }: FilterProps) {
  return (
    <Wrapper>
      Количество репозиториев:{" "}
      <FilterItem
        $isActive={filterState[0]}
        onClick={() => {
          setFilterState({ 0: true, 1: false });
        }}
      >
        больше
      </FilterItem>{" "}
      |{" "}
      <FilterItem
        $isActive={filterState[1]}
        onClick={() => {
          setFilterState({ 0: false, 1: true });
        }}
      >
        меньше
      </FilterItem>
    </Wrapper>
  );
}

export default Filter;
