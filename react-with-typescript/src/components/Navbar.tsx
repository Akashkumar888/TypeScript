import { NavLink, useSearchParams } from "react-router-dom";

const Navbar = () => {

  const [searchParams] = useSearchParams();

  const todosData = searchParams.get("todos");

  return (
    <nav className="navbar">

      <NavLink
        to="/"
        className={
          todosData === null
            ? "active"
            : ""
        }
      >
        All
      </NavLink>

      <NavLink
        to="/?todos=active"
        className={
          todosData === "active"
            ? "active"
            : ""
        }
      >
        Active
      </NavLink>

      <NavLink
        to="/?todos=completed"
        className={
          todosData === "completed"
            ? "active"
            : ""
        }
      >
        Completed
      </NavLink>

    </nav>
  );
};

export default Navbar;