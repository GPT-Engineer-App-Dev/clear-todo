// Complete the Index page component here
// Use chakra-ui
import { VStack, HStack, Heading, List } from "@chakra-ui/react";

const Index = () => {
  return (
    <VStack spacing={4} align="stretch">
      <HStack>
        <Heading as="h1" size="xl">
          My Todos
        </Heading>
      </HStack>
      <List spacing={3}></List>
    </VStack>
  );
};

export default Index;
