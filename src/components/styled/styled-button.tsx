import styled from 'styled-components';

type TButton = {
  fontSize?: string;
};

const StyledButton = styled.button<TButton>`
  border: none;
  padding: 10px 20px;
  background-color: white;
  border-radius: 10px;
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize || '15px'};
`;

export default StyledButton;
