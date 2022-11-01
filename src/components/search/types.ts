export type TFormValueProp = {
  formValue: string;
};

export type TChannelItem = {
  id: {
    channelId: string;
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      medium: {
        url: string;
      };
    };
  };
};

export type TSongItem = {
  id: string;
  snippet: {
    playlistId: string;
    resourceId: {
      videoId: string;
    };
    thumbnails: {
      medium: {
        url: string;
      };
    };
    videoOwnerChannelTitle: string;
    title: string;
  };
};
