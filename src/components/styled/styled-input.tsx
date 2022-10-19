import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  border: none;
  color: white;
  border-radius: 10px 0 0 10px;
  background-color: grey;
  font-size: 20px;
  padding-left: 20px;
  &:focus {
    outline: none;
  }
`;

export default StyledInput;
