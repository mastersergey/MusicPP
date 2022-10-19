import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import MobileMenu from '../mobile-menu/mobile-menu';
import SidebarMenu from '../sidebar-menu/sidebar-menu';

const LayoutWrapper = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: 15% 85%;
  background-color: darken(#333333, 10%);
  @media (max-width: 1320px) {
    grid-template-columns: 25% 75%;
  }
  @media (max-width: 555px) {
    grid-template-columns: 100%;
  }
`;

function Layout() {
  return (
    <LayoutWrapper>
      <SidebarMenu />
      <Outlet />
      <MobileMenu />
    </LayoutWrapper>
  );
}

export default Layout;
