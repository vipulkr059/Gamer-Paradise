import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { PlatformList } from "./PlatformList";
import { CriticScore } from "./CriticScore";

interface Props {
  game: Game;
}

export const GameCards = ({ game }: Props) => {
  return (
    <Card>
      <Image
        src={game.background_image}
        borderRadius={10}
        overflow={"hidden"}
      />
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
