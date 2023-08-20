import useGenre from "./useGenre";

const useGenres = (id?: number) => {
  const { data: genres } = useGenre();
  return genres?.results.find((g) => g.id === id);
};
export default useGenres;
