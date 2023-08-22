import { Box, Grid, GridItem, Show, Flex } from "@chakra-ui/react";

import GameGrid from "../components/GameGrid";
import { GamesHeading } from "../components/GamesHeading";
import { GenreList } from "../components/GenreList";
import { NavBar } from "../components/NavBar";
import { PlatformSelector } from "../components/PlatformSelector";
import { SortSelector } from "../components/SortSelector";

export const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GamesHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};
