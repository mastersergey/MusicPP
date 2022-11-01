import { Flexbox } from '../../styled/flexbox';
import { ArtistSongsItemIcon, ArtistSongsItemWrapper } from './styles';

type TArtistSongsItemProp = {
  icon: string;
  number: number;
  title: string;
};

function ArtistSongsItem({ icon, number, title }: TArtistSongsItemProp) {
  return (
    <ArtistSongsItemWrapper align="center">
      <Flexbox justify="space-between" align="center">
        <span>{number}</span>
        <ArtistSongsItemIcon alt="p" src={icon} />
      </Flexbox>
      <span>{title}</span>
    </ArtistSongsItemWrapper>
  );
}

export default ArtistSongsItem;
