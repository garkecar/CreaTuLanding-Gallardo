import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        textAlign: "center",
        backgroundColor: "#fff",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        transition: "transform 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => (e.target.style.transform = "translateY(-2px)")}
      onMouseLeave={(e) => (e.target.style.transform = "translateY(0)")}
    >
      <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>
        {product.image}
      </div>
      <h3 style={{ margin: "0.5rem 0", color: "#333" }}>{product.name}</h3>
      <p style={{ color: "#666", margin: "0.5rem 0" }}>${product.price}</p>
      <p style={{ color: "#888", fontSize: "0.9rem", margin: "1rem 0" }}>
        Stock: {product.stock}
      </p>
      <Link
        to={`/item/${product.id}`}
        style={{
          display: "inline-block",
          padding: "0.5rem 1rem",
          backgroundColor: "#007bff",
          color: "white",
          textDecoration: "none",
          borderRadius: "4px",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Ver Detalle
      </Link>
    </div>
  );
};

export default Item;
