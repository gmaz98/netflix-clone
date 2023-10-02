import { Play } from "lucide-react";
import { Movie } from "../typings";
import useMovies from "../hooks/useMovies";
import requests from "../utils/request";
import { InformationCircleIcon } from "@heroicons/react/20/solid";

export interface FetchResponse {
  page: number;
  results: Movie[] | null;
  total_pages: number;
  total_results: number;
}

const baseUrl = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const { movies: netflixOriginals } = useMovies(
    requests.fetchNetflixOriginals
  );
  const movie =
    netflixOriginals?.[
      Math.floor(Math.random() * (netflixOriginals?.length ?? 0))
    ] ?? null;

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
        <img src={`${baseUrl}${movie?.backdrop_path}`} alt="image"></img>
      </div>
      <h1 className="text-2xl lg:text-7xl md:text-4xl font-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <Play size={24}></Play>
        </button>
        <button className="bannerButton bg-[gray]/70">
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8"></InformationCircleIcon>
        </button>
      </div>
    </div>
  );
};

export default Banner;
