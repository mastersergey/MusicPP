import { token } from './token';

const YT = {
  GET: {
    token: token,
    CHANNEL: async function (searchValue: string) {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?maxResults=1&type=channel&part=snippet&q=${searchValue}&topicId=%2Fm%2F04rlf&key=${this.token}`,
      );

      const result = await response.json();
      return result.items;
    },
    PLAYLIST: async function (searchValue: string | undefined, maxResults: number) {
      const playlistResponse = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?maxResults=${maxResults}&type=playlist&part=snippet&q=${searchValue}&topicId=%2Fm%2F04rlf&key=${this.token}`,
      );

      const playlist = await playlistResponse.json();
      return playlist;
    },
    SONGS: async function (searchValue: string | undefined, maxResults: number) {
      const playlist = await this.PLAYLIST(searchValue, maxResults);
      const playlistId = playlist.items[0].id.playlistId;
      console.log(searchValue);
      const songsResponse = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?maxResults=${maxResults}&part=snippet&playlistId=${playlistId}&key=${this.token}`,
      );
      const songs = await songsResponse.json();
      console.log(songs);
      return songs.items;
    },
    ALBUMS: async function (id: string | undefined) {
      const albumsResponse = await fetch(
        `https://youtube.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${id}&maxResults=5&key=${this.token}`,
      );
      const albums = await albumsResponse.json();
      console.log(albums.items);
      return albums.items;
    },
    ARTIST_INFO: async function (id: string | undefined) {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/channels?part=brandingSettings&part=statistics&id=${id}&key=${this.token}`,
      );
      const url = await response.json();

      return {
        banner:
          url.items[0].brandingSettings.image.bannerExternalUrl +
          '=w1440-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
        title: url.items[0].brandingSettings.channel.title,
        subscribersCount: url.items[0].statistics.subscriberCount,
      };
    },
  },
};

export default YT;
