import styled from "styled-components";

export const StyledApp = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background: #cee5e7;
  padding-left: calc(50% - 720px);
  padding-right: calc(50% - 720px);
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
