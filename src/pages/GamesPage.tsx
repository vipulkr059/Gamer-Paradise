import React from "react";
import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { ExpandableText } from "../components/ExpandableText";
import { GameAttribute } from "../components/GameAttribute";
import GameTrailer from "../components/GameTrailer";
import Screenshots from "../components/Screenshots";

export const GamesPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText children={game.description_raw} />
        <GameAttribute game={game}></GameAttribute>
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <Screenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};
