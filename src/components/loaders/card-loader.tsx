import styled, { keyframes } from "styled-components";

const LoaderAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

const StyledLoader = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid #046d77;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  position: absolute;
  margin-inline: auto;
  inset-inline: 0;
  inset-block-start: calc(50% - 24px);
  animation: ${LoaderAnimation} 1s linear infinite;
`;

function CardLoader() {
  return <StyledLoader></StyledLoader>;
}

export default CardLoader;
