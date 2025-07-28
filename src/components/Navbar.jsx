import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "lightblue",
        borderBottom: "1px solid #dee2e6",
      }}
    >
      <div style={{ display: "flex", gap: "3rem" }}>
        <a href="#" style={{ textDecoration: "none", color: "darkred" }}>
          Inicio
        </a>
        <a href="#" style={{ textDecoration: "none", color: "darkred" }}>
          Productos
        </a>
        <a href="#" style={{ textDecoration: "none", color: "darkred" }}>
          Contacto
        </a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
