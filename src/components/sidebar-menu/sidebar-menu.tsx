import React from 'react';
import styled from 'styled-components';

import SidebarMenuLink from './sidebar-menu-link';

const StyledSidebarMenu = styled.aside`
  display: flex;
  top: 0;
  height: 100vh;
  position: fixed;
  width: 15%;
  flex-direction: column;
  padding-top: 30px;
  background-color: black;
  @media (max-width: 1320px) {
    width: 25%;
  }
  @media (max-width: 555px) {
    display: none;
  }
`;

function SidebarMenu() {
  return (
    <StyledSidebarMenu>
      <SidebarMenuLink to="/">Home</SidebarMenuLink>
      <SidebarMenuLink to="library">Library</SidebarMenuLink>
      <SidebarMenuLink to="search">Search</SidebarMenuLink>
      <SidebarMenuLink to="premium">Premium</SidebarMenuLink>
    </StyledSidebarMenu>
  );
}

export default SidebarMenu;
