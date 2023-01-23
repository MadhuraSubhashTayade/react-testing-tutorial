//import axios from "axios";
import { useEffect, useState } from "react";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const Todolist = () => {
  const [todos, setTodos] = useState<TodoType[]>([]);
  useEffect(() => {
    const getTodos = async () => {
      const result = await fetch("https://jsonplaceholder.typicode.com/todos");
      const res = await result.json();
      setTodos(res);
    };
    getTodos();
  }, []);
  return (
    <>
      <h3>Todolist</h3>
      <ul>
        {todos ? (
          todos.map((todo, index) => (
            <li data-testid="todo" key={index}>
              {todo.title}
            </li>
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </ul>
    </>
  );
};

export default Todolist;
