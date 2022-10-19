import styled from 'styled-components';

export type TFlexbox = {
  align?: string;
  direction?: string;
  justify?: string;
};

export const Flexbox = styled.div<TFlexbox>`
  display: flex;
  align-items: ${(props) => props.align || 'center'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  flex-direction: ${(props) => props.direction || 'row'};
`;
