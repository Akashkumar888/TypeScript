import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";
import { toast } from "react-toastify";

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  createdAt: Date;
};

export type AppContextType = {
  todos: Todo[];

  handleAddTodo: (task: string) => void;

  toggleTodoAsCompleted: ( id: string ) => void;
  handleDeleteTodo: ( id: string ) => void;

};


const AppContext = createContext<AppContextType | null>(
    null
  );


export type AppContextProviderProps = {
  children: ReactNode;
};


export const AppContextProvider = ({
  children,
}: AppContextProviderProps) => {

  const [todos, setTodos] = useState<Todo[]>(()=>{

    const newTodos = localStorage.getItem("todos") || "[]" ;
    return JSON.parse(newTodos) as Todo[] 
  })
  // =====================
  // Add Todo
  // =====================

  const handleAddTodo = (task: string): void => {

  const newTodo: Todo = {
    id: Math.random().toString(),
    task,
    completed: false,
    createdAt: new Date(),
  };

  setTodos((prev) => {
  const newTodos = [
  newTodo,
  ...prev,
];
  localStorage.setItem(
    "todos",
    JSON.stringify(newTodos)
  );
  return newTodos;
});

toast.success("Todo Added");

};

  // =====================
  // Toggle Completed
  // =====================

  const toggleTodoAsCompleted = (id: string): void => {

  setTodos((prev) => {

    const newTodos = prev.map((todo) => {

      if (todo.id === id) {

        return {
          ...todo,
          completed: !todo.completed,
        };

      }
      
      return todo;

    });
    localStorage.setItem("todos",JSON.stringify(newTodos));
    return newTodos;

  });

};


  // =====================
  // Delete Todo
  // =====================

  const handleDeleteTodo = (id: string): void => {

  setTodos((prev) => {

    const newTodos = prev.filter((todo) => {
      return todo.id !== id;
    });
    localStorage.setItem("todos",JSON.stringify(newTodos));
    return newTodos;
  });
  toast.error("Todo Deleted");

};


  const value: AppContextType = {
    todos,
    handleAddTodo,
    toggleTodoAsCompleted,
    handleDeleteTodo,
  };


  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

// =====================
// Custom Hook
// =====================

export const useTodoContext = () => {

  const context =
    useContext(AppContext);

  if (!context) {
    throw new Error(
      "useTodoContext must be used inside AppContextProvider"
    );
  }

  return context;
};

// Then inside AddToDo:
// const { handleAddTodo } = useTodoContext();
// No null checking everywhere.
