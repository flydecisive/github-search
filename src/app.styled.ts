import styled from "styled-components";

export const StyledApp = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background: #cee5e7;
  padding-left: 2vw;
  padding-right: 2vw;
  box-sizing: border-box;
  padding-top: 30px;
  padding-bottom: 30px;
  position: relative;
`;

export const Content = styled.div<{ $isLoading: boolean }>`
  width: 100%;
  display: ${(props) => (props.$isLoading ? "flex" : "grid")};
  justify-content: center;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 15px;
  row-gap: 15px;
  margin-top: ${(props) => (props.$isLoading ? "120px" : "20px")};
  box-sizing: border-box;
`;

export const Message = styled.p`
  font-size: 30px;
  font-style: normal;
  color: #109caa;
  font-weight: 700;
  grid-column: span 2;
`;

export const SearchInfo = styled.p`
  font-size: 14px;
  font-style: normal;
  rgb(16 156 170 / 50%)
  font-weight: 700;
  grid-column: span 2;
  opacity: 0.5;
  margin-top: 5px;
`;

export const PagesWrapper = styled.ul`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-flow: row nowrap;
  gap: 15px;
  justify-content: center;
`;

export const PagesItem = styled.li<{ $isActive: boolean; id: number }>`
  list-style-type: none;
  font-size: 32px;
  font-wight: 700;
  color: ${(props) => (props.$isActive ? "#68c5cc" : "#fff")};

  &:hover {
    cursor: pointer;
  }
`;
