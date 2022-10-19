import styled from 'styled-components';

import { Flexbox } from './styled/flexbox';
import StyledIcon from './styled/styled-icon';

type SongItemProp = {
  icon: string;
  title: string;
  id?: string;
};

const SongWrapper = styled(Flexbox)`
  width: 100%;
  padding: 10px 40px;
  border-radius: 10px;
`;

const SongTitle = styled.p`
  font-size: 15px;
  font-weight: 500;
`;

function SongItem({ icon, title, id }: SongItemProp) {
  return (
    <SongWrapper>
      <StyledIcon src={icon} alt="icon" />
      <SongTitle>{title}</SongTitle>
    </SongWrapper>
  );
}

export default SongItem;
