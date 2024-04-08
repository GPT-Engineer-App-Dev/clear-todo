// Complete the Index page component here
// Use chakra-ui
import { VStack, HStack, Heading, List, ListItem, Input, Button, Checkbox, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const Index = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleAddTodo = () => {
    if (inputValue) {
      setTodos([...todos, { text: inputValue, completed: false }]);
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
          <ListItem key={index}>
            <HStack>
              <Checkbox isChecked={todo.completed} onChange={() => handleToggleTodo(index)} />
              <Text textDecoration={todo.completed ? "line-through" : "none"}>{todo.text}</Text>
              <Button size="xs" onClick={() => handleDeleteTodo(index)}>
                X
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </VStack>
  );
};

export default Index;
