import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 24px 0px;
`;

export const Form = styled.form`
  display: flex;
  gap: 12px;
`;

export const Input = styled.input`
  width: 300px;
  height: 48px;
  padding: 5px 14px;

  border: 1px #041cd1 solid;
  border-radius: 24px;
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 48px;
  height: 48px;
  border-radius: 50%;

  background-color: #041cd1;
  color: white;
`;
