import styled, { keyframes } from 'styled-components';

const grow = keyframes`
  from {
    width: 0;
  }
  to {
    width: 40px;
  }
  
`;

export const Bar = styled.div<{ color: string }>`
  background: ${props => props.color};
  height: 5px;
  border-radius: 15px;
  animation: ${grow} 0.5s forwards;
`;