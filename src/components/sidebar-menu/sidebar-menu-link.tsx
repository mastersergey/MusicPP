import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 5px;
  padding: 5px 10px;
  color: white;
  @media (max-width: 830px) {
    font-size: 15px;
  }
  &:hover {
    background-color: gray;
  }
  &::before {
    content: ${(props) =>
      `url(/assets/menu/${props.to === '/' ? 'home' : props.to}.svg)`};
    margin-right: 15px;
  }
`;

function SidebarMenuLink(props: any) {
  return <StyledNavLink {...props} />;
}

export default SidebarMenuLink;
