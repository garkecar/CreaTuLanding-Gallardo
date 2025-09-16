import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { categories } from "../data/mockData";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.5rem 4rem",
        backgroundColor: "orange",
        borderBottom: "1px solid #dee2e6",
      }}
    >
      <div>
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1 style={{ margin: 0, color: "darkgreen" }}>LA TIENDA</h1>
        </Link>
      </div>
      <div style={{ display: "flex", gap: "3.5rem" }}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            textDecoration: "none",
            color: isActive ? "#007bff" : "#333",
            fontWeight: isActive ? "bold" : "normal",
          })}
        >
          Inicio
        </NavLink>
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/category/${category.id}`}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "#007bff" : "#333",
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
