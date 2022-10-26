import styled from 'styled-components';

export type TFlexbox = {
  align?: string;
  direction?: string;
  justify?: string;
  flex?: string;
};

export const Flexbox = styled.div<TFlexbox>`
  display: flex;
  flex: ${(props) => props.flex || 'none'};
  align-items: ${(props) => props.align || ''};
  justify-content: ${(props) => props.justify || ''};
  flex-direction: ${(props) => props.direction || ''};
`;
