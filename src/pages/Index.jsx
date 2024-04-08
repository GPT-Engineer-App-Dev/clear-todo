// Complete the Index page component here
// Use chakra-ui
import { VStack, HStack, Heading, List, ListItem, Input, Button } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {
    if (inputValue) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <HStack>
        <Heading as="h1" size="xl">
          My Todos
        </Heading>
      </HStack>

      <HStack>
        <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Enter a todo" />
        <Button onClick={handleAddTodo} colorScheme="blue">
          Add Todo
        </Button>
      </HStack>

      <List spacing={3}>
        {todos.map((todo, index) => (
          <ListItem key={index}>{todo}</ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Index;
