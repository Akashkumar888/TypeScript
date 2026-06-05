import {
  useTodoContext,
} from "../context-api/AppContext";
import {useSearchParams} from 'react-router-dom'

const TodoList = () => {

  const {
    todos,
    toggleTodoAsCompleted,
    handleDeleteTodo,
  } = useTodoContext();



  
  const [searchParams] = useSearchParams();

const todosData =
  searchParams.get("todos");


  let filterData = todos;

if (todosData === "active") {
  filterData = filterData.filter((task) => {
    return !task.completed;
  });
}

if (todosData === "completed") {
  filterData = filterData.filter((task) => {
    return task.completed;
  });
}


  return (
    <div>

      <h2>Todos</h2>

      {filterData.length === 0 ? (

        <p>
          No Todos Available
        </p>

      ) : (

        <ul>

          {filterData.map((todo) => (

            <li key={todo.id}>

              <input
                type="checkbox"
                id={`todo-${todo.id}`}
                checked={
                  todo.completed
                }
                onChange={() =>
                  toggleTodoAsCompleted(
                    todo.id
                  )
                }
              />

              <label
                htmlFor={`todo-${todo.id}`}
              >
                {todo.task}
              </label>

              {todo.completed && (

                <button
                  type="button"
                  onClick={() =>
                    handleDeleteTodo(
                      todo.id
                    )
                  }
                >
                  Delete
                </button>

              )}

            </li>

          ))}

        </ul>

      )}

    </div>
  );
};

export default TodoList;