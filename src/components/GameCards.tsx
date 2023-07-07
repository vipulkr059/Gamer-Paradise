import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

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
      </CardBody>
    </Card>
  );
};
