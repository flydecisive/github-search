import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 204px;
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

  &:hover {
    cursor: pointer;
  }
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

export const Heading = styled.h3`
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #68c5cc;
`;

export const Link = styled.a`
  display: block;
  text-decoration: none;
  width: 100%;
  padding: 10px 0px 10px 0px;
  font-size: 20px;
  font-style: normal;
  color: #fff;
  font-wight: 700;
  transition: all 0.3s;
  background: #68c5cc;
  text-align: center;
  border-radius: 5px;
  box-sizing: border-box;
  border: 1px solid #68c5cc;

  &:hover {
    cursor: pointer;
    background: #bcfcff;
    color: #000;
  }
`;

export const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5px;
`;

export const InfoItem = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 5px;
  border: 2px solid #68c5cc;
  box-sizing: border-box;
  padding: 5px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  color: #68c5cc;
  font-size: 16px;
  font-weight: 700;
`;
