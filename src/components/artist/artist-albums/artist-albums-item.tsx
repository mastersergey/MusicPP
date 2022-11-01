import { ArtistAlbumsItemWrapper } from './styles';

type TArtistAlbumsItemProp = {
  icon: string;
  title: string;
};

function ArtistAlbumsItem({ icon, title }: TArtistAlbumsItemProp) {
  return (
    <ArtistAlbumsItemWrapper direction="row">
      <img src={icon} alt="p" />
      <div>
        <p>{title}</p>
        <p>2015</p>
      </div>
    </ArtistAlbumsItemWrapper>
  );
}

export default ArtistAlbumsItem;
