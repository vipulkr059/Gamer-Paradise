import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import { GenreList } from "./components/GenreList";
import { Genre } from "./hooks/useGenre";
import { useState } from "react";
import { PlatformSelector } from "./components/PlatformSelector";
//import { Platform } from "./hooks/useGames";
import { SortSelector } from "./components/SortSelector";
import { GamesHeading } from "./components/GamesHeading";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}
function App() {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "200px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...GameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX="5px">
          <GenreList
            selectedGenreId={GameQuery.genreId}
            onSelectedGenre={(genre) =>
              setGameQuery({ ...GameQuery, genreId: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GamesHeading gameQuery={GameQuery} />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector
                selectedPlatformId={GameQuery.platformId}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...GameQuery, platformId: platform.id })
                }
              />
            </Box>

            <SortSelector
              sortOrder={GameQuery.sortOrder}
              onSelectOrder={(sortOrder) =>
                setGameQuery({ ...GameQuery, sortOrder })
              }
            />
          </Flex>
        </Box>

        <GameGrid gameQuery={GameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
