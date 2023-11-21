import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  color: #109caa;
  font-size: 20px;
  font-weight: 700;
`;

export const FilterItem = styled.span<{ $isActive: boolean }>`
  color: ${(props) => (props.$isActive ? "#046d77" : "#109caa")};
  border: ${(props) => (props.$isActive ? "1px solid #046d77" : "none")};
  box-sizing: border-box;
  padding: 3px;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
  }
`;
