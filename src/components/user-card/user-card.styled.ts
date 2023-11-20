import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background: #fff;
  border: none;
  border-radius: 7px;
  box-shadow: 0px 4px 35px 0px #79d1d5;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  gap: 10px;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 200px;
`;

export const UserName = styled.p`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #68c5cc;
`;
