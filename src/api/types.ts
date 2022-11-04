type TContentItem = {
  id: string;
  snippet: {
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

type TPageInfoResponse = {
  banner?: string;
  title?: string;
  subscribersCount?: string;
};

export type { TContentItem, TPageInfoResponse };
