import { Input, InputGroup, InputLeftElement, filter } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../store";

interface Props {
  onSearch: (searchText: string) => void;
}

export const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement>{<BsSearch />}</InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search Games....."
          variant={"filled"}
        ></Input>
      </InputGroup>
    </form>
  );
};
