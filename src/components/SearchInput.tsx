import { Input, InputGroup, InputLeftElement, filter } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

export const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
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
