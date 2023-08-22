import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
export const ExpandableText = ({ children }: Props) => {
  const [expanded, setexpanded] = useState(false);
  const limit = 300;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <>
      <Text>
        {summary}
        <Button onClick={() => setexpanded(!expanded)}>
          {expanded ? "Show Less" : "Show more"}
        </Button>
      </Text>
    </>
  );
};
