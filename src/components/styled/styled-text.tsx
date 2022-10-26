import styled from 'styled-components';

type TStyledText = {
  size?: string;
  weight?: string;
  color?: string;
  margin?: string;
};

const StyledText = styled.span<TStyledText>`
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  margin: ${({ margin }) => margin || 0};
`;

export default StyledText;
