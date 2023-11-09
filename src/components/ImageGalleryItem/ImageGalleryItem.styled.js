import styled from 'styled-components';

export const Image = styled.img`
  width: 300px;
  height: 200px;

  cursor: pointer;
  transition: transform 0.3s linear;

  border-radius: 15px;

  &:hover {
    transform: scale(1.06);
  }
`;
