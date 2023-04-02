type Image = {
  height: number;
  url: string;
  width: number;
};

type Artist = {
  external_urls: {
    spotify: string;
  };
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type Album = {
  album_type: string;
  artists: Artist[];
  external_urls: {
    spotify: string;
  };
  id: string;
  image: Image;
  release_date: string;
  total_tracks: number;
  trackName: string;
};

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
      images: Image[];
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
  artistImage: Image;
  genres: string[];
  artistPopularity: number;
  followers: number;
  artistUrl: string;
  totalAlbums: number;
  albums: Album[];
  relatedArtists: {
    artists: {
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
      images: Image[];
      name: string;
      popularity: number;
      type: string;
      uri: string;
    }[];
  };
};

export type SpotifyArtistAlbums = {
  albums: Album[];
};

export type SpotifyAlbumResponse = {
  artists: Artist[];
  albumLabel: string;
  albumName: string;
  albumReleaseDate: string;
  albumTotalTracks: number;
  albumPopularity: number;
  albumTracks: {
    artists: Artist[];
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
  albumImage: Image;
};

export type SpotifyAlbumTracks = {
  artists: Artist[];
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

export type SpotifyRelatedArtistsResponse = {
  artists: {
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
    images: Image[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
  }[];
};
