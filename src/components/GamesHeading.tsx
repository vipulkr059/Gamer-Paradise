import React from "react";
import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import { usePlatform } from "../hooks/usePlatform";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

export const GamesHeading = ({ gameQuery }: Props) => {
  const genre = useGenres(gameQuery.genreId);
  const platform = usePlatforms(gameQuery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};
