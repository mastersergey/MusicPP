import styled from 'styled-components';

import { Flexbox } from '../../styled/flexbox';
import StyledButton from '../../styled/styled-button';

const StatusWrapper = styled(Flexbox)`
  padding: 20px 50px;
  align-items: center;
  @media (max-width: 1320px) {
    justify-content: space-between;
  }
`;

const FollowButton = styled(StyledButton)`
  background-color: transparent;
  color: white;
  border: 2px solid white;
`;

export { FollowButton, StatusWrapper };
