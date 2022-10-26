import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import MobileMenu from '../mobile-menu/mobile-menu';
import MusicPlayer from '../music-player/music-player';
import SidebarMenu from '../sidebar-menu/sidebar-menu';
import LayoutBottom from './layout-bottom';

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
    <>
      <LayoutWrapper>
        <SidebarMenu />
        <div></div>
        <Outlet />
        <LayoutBottom />
      </LayoutWrapper>
    </>
  );
}

export default Layout;
