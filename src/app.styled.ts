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

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 15px;
  row-gap: 15px;
  margin-top: 20px;
  box-sizing: border-box;
`;
