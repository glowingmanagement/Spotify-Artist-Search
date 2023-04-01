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
  totalAlbums: number;
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
    image: {
      height: number;
      url: string;
      width: number;
    }[];
    release_date: string;
    total_tracks: number;
    trackName: string;
  }[];
};

export type SpotifyArtistAlbums = {
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
    image: {
      height: number;
      url: string;
      width: number;
    }[];
    release_date: string;
    total_tracks: number;
    trackName: string;
    // totalAlbums: number;
  }[];
};

export type Album = {
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
  image: {
    height: number;
    url: string;
    width: number;
  };
  release_date: string;
  total_tracks: number;
  trackName: string;
};

export type SpotifyAlbumResponse = {
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
  albumLabel: string;
  albumName: string;
  albumReleaseDate: string;
  albumTotalTracks: number;
  albumPopularity: number;
  albumTracks: {
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
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
  }[];
  albumImage: {
    height: number;
    url: string;
    width: number;
  };
};

export type SpotifyAlbumTracks = {
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
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};
