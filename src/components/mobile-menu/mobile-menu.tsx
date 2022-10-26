import React from 'react';
import styled from 'styled-components';

import MobileMenuLink from './mobile-menu-link';

const MobileMenuWrapper = styled.div`
  display: none;
  width: 100%;
  justify-content: center;
  background-color: #333333;
  padding: 20px 0;
  @media (max-width: 555px) {
    display: flex;
  }
`;

function MobileMenu() {
  return (
    <MobileMenuWrapper>
      <MobileMenuLink to="/">Home</MobileMenuLink>
      <MobileMenuLink to="library">Library</MobileMenuLink>
      <MobileMenuLink to="search">Search</MobileMenuLink>
      <MobileMenuLink to="premium">Premium</MobileMenuLink>
    </MobileMenuWrapper>
  );
}

export default MobileMenu;
