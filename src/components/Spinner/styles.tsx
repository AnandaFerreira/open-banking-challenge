import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  width: 100%;
  height: 100%;
`;

export const Loader = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  border: 10px solid orange;
  border-top-color: #002147;
  box-sizing: border-box;
  background: transparent;
  animation: loading 1s linear infinite;

  @keyframes loading {
    0% {
      transform: rotate(0deg);
    }
    0% {
      transform: rotate(360deg);
    }
  }
`;
