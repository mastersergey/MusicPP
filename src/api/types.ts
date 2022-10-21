type TContentItem = {
  id: string;
  snippet: {
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
};

type TPageInfoResponse = {
  banner?: string;
  title?: string;
  subscribersCount?: string;
};

export type { TContentItem, TPageInfoResponse };
