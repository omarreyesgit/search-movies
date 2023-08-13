import MovieDescription from './pages/MovieDescription';
export interface Welcome {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
export interface MapedMovie {
  title: string;
  year: string;
  id: string;
  type: string;
  poster: string;
}

export enum Type {
  Game = "game",
  Movie = "movie",
}
export interface NoResults {
  Response: string;
  Error: string;
}
export interface MovieDescription {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}

export interface Rating {
  Source: string;
  Value: string;
}
