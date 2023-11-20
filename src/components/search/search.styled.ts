import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  padding-left: 20px;
  padding-right: 20px;
  background: #fff;
  border-radius: 7px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 14px 0px #e5e5e5;
`;

export const SearchIcon = styled.svg`
  stroke: #c4c4c4;
  fill: #c4c4c4;
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

export const SearchInput = styled.input`
  width: 80%;
  height: 50px;
  border: none;
  margin-right: auto;
  font-size: 20px;
  font-style: normal;
  color: #000;
  font-wight: 700;

  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid #68c5cc;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Button = styled.button`
  background: #68c5cc;
  border-radius: 4px;
  height: 50px;
  padding: 0px 30px 0px 30px;
  border: none;
  dispay: flex;
  align-content: center;
  font-size: 20px;
  font-style: normal;
  color: #fff;
  font-wight: 700;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    background: #bcfcff;
    color: #000;
  }
`;
