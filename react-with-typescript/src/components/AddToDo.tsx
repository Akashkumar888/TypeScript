import {
  FormEvent,
  useState,
} from "react";

import {
  useTodoContext,
} from "../context-api/AppContext";

const AddToDo = () => {

  const [todo, setTodo] =
    useState("");

  const { handleAddTodo } =
    useTodoContext();

  const onSubmitHandler = (
    e: FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    if (!todo.trim()) return;

    handleAddTodo(todo);

    setTodo("");
  };

  return (
    <form
      onSubmit={onSubmitHandler}
    >
      <input
        type="text"
        value={todo}
        onChange={(e) =>
          setTodo(e.target.value)
        }
      />

      <button type="submit">
        Add
      </button>
    </form>
  );
};

export default AddToDo;