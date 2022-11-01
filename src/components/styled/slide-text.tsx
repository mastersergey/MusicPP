import { ReactChild, ReactFragment, ReactPortal } from 'react';
import styled from 'styled-components';

import { Flexbox } from './flexbox';
import StyledText from './styled-text';

const SlideWrapper = styled(Flexbox)`
  @keyframes tickerh {
    0% {
      transform: translate3d(100%, 0, 0);
    }
    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }
  animation: tickerh linear 10s infinite;
  &:hover {
    animation-play-state: paused;
  }
`;

const SlideItem = styled(StyledText)`
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  white-space: nowrap;
`;

function SlideText({ children }: any) {
  return (
    <div style={{ overflow: 'hidden' }}>
      <SlideWrapper>
        <SlideItem color="white" size="17px" weight="500">
          {children}
        </SlideItem>
      </SlideWrapper>
    </div>
  );
}

export default SlideText;
