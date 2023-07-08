import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGameResponse {
  id: number;
  results: Game[];
}
const useGames = () => {
  const controller = new AbortController();
  const signal = controller.signal;

  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    setisLoading(true);
    apiClient.get<FetchGameResponse>("/games", { signal }).then((res) => {
      setGames(res.data.results);
      setisLoading(false);
    });

    //   .catch((err) => {
    //     if (err instanceof CanceledError) return;
    //     setError(err.message);
    // setisLoading(false)
    //   });
    // return () => controller.abort();
  }, []);
  return { games, error, isLoading };
};
export default useGames;
