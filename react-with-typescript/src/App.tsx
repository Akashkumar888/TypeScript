import {
  ToastContainer
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import AddToDo from "./components/AddToDo";
import TodoList from "./components/TodoList";

const App = () => {

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
      />

      <main>

        <h1>
          TODO REACT + TYPESCRIPT
        </h1>

        <Navbar />

        <AddToDo />

        <TodoList />

      </main>
    </>
  );
};

export default App;