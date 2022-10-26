import styled from 'styled-components';

type TButton = {
  fontSize?: string;
  color?: string;
  padding?: string;
};

const StyledButton = styled.button<TButton>`
  border: none;
  padding: ${({ padding }) => padding || '10px'};
  background-color: ${({ color }) => color || 'white'};
  border-radius: 10px;
  cursor: pointer;
  font-size: ${({ fontSize }) => fontSize || '15px'};
`;

export default StyledButton;
