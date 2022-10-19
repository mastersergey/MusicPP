import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledMobileLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: white;
  margin: 0 auto;
  &::before {
    content: ${(props) => `url(/assets/${props.to === '/' ? 'home' : props.to}.svg)`};
    margin: 0 auto;
  }
`;

function MobileMenuLink(props: any) {
  return <StyledMobileLink {...props} />;
}

export default MobileMenuLink;
