// useMovies.ts
import { useEffect, useState } from "react";
import axios from "axios";
import { Movie } from "../typings";
import { FetchResponse } from "../components/Banner";

const useMovies = (endpoint: string) => {
  const [movies, setMovies] = useState<Movie[] | null>(null);

  useEffect(() => {
    axios.get<FetchResponse>(endpoint).then((res) => {
      const resultsArray = res.data.results;
      setMovies(resultsArray);
    });
  }, [endpoint]);

  return { movies };
};

export default useMovies;

