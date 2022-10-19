import styled from 'styled-components';

import { Flexbox } from './styled/flexbox';
import LinkWrapper from './styled/link-wrapper';
import StyledButton from './styled/styled-button';
import StyledIcon from './styled/styled-icon';

export type ChannelItemProps = {
  icon: string;
  title: string;
  description: string;
  id: string;
};

const ChannelWrapper = styled(Flexbox)`
  width: 100%;
  padding: 10px;
  padding-right: 20px;
  border-radius: 10px;
`;

const SubscribeButton = styled(StyledButton)`
  font-size: 20px;
`;

function ChannelItem({ icon, title, description, id }: ChannelItemProps) {
  return (
    <LinkWrapper to={`/artist/${id}`}>
      <ChannelWrapper justify="space-between">
        <Flexbox>
          <StyledIcon src={icon} alt="icon" />
          <div>
            <h1>{title}</h1>
            <span>{description}</span>
          </div>
        </Flexbox>
        <SubscribeButton>SUBSCRIBE</SubscribeButton>
      </ChannelWrapper>
    </LinkWrapper>
  );
}

export default ChannelItem;
