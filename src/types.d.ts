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
