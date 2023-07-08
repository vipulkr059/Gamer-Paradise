import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { PlatformList } from "./PlatformList";
import { CriticScore } from "./CriticScore";
import getCroppedImage from "../services/image-url";

interface Props {
  game: Game;
}

export const GameCards = ({ game }: Props) => {
  return (
    <Card width="275px" borderRadius={10} overflow={"hidden"}>
      <Image src={getCroppedImage(game.background_image)} />
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
