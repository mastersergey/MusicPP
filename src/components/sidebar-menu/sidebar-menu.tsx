import React from 'react';
import styled from 'styled-components';

import SidebarMenuLink from './sidebar-menu-link';

const StyledSidebarMenu = styled.div`
  display: flex;
  top: 0;
  height: 80vh;
  position: sticky;
  flex-direction: column;
  margin: 10px;
  padding-top: 30px;
  background-color: black;
  border-radius: 5%;
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
