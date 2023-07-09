import useData from "./useData";
import { Platform } from "./useGames";

export interface platform {
  id: number;
  name: string;
  slug: string;
}
export const usePlatform = () => useData<Platform>("/platforms/lists/parents");
