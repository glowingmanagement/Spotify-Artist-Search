export type SpotifyArtistResponse = {
  artists: {
    href: string;
    items: {
      external_urls: {
        spotify: string;
      };
      followers: {
        href: null;
        total: number;
      };
      genres: string[];
      href: string;
      id: string;
      images: {
        height: number;
        url: string;
        width: number;
      }[];
      name: string;
      popularity: number;
      type: string;
      uri: string;
    }[];
    limit: number;
    next: null | string;
    offset: number;
    previous: null | string;
    total: number;
  };
};

export type SpotifyArtistProfileResponse = {
  artistName: string;
  artistImage: {
    height: number;
    url: string;
    width: number;
  };
  genres: string[];
  artistPopularity: number;
  followers: number;
  artistUrl: string;
  albums: {
    album_type: string;
    artists: {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }[];
    external_urls: {
      spotify: string;
    };
    id: string;
    images: {
      height: number;
      url: string;
      width: number;
    }[];
    release_date: string;
    total_tracks: number;
    trackName: string;
  };
};
