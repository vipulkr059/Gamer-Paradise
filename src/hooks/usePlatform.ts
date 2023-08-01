import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import { Platform } from "./useGames";
import apiClient from "../services/api-client";
import platforms from "../data/platforms";

interface platform {
  id: number;
  name: string;
  slug: string;
}
export const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });
