import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleAddToCart = () => {
    onAdd(count);
  };

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "1rem",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "1rem",
        }}
      >
        <button
          onClick={handleDecrement}
          disabled={count <= 1}
          style={{
            padding: "0.5rem 1rem",
            border: "1px solid #007bff",
            backgroundColor: count <= 1 ? "#ccc" : "#fff",
            color: count <= 1 ? "#666" : "#007bff",
            borderRadius: "4px",
            cursor: count <= 1 ? "not-allowed" : "pointer",
          }}
        >
          -
        </button>

        <span
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
            minWidth: "2rem",
            textAlign: "center",
          }}
        >
          {count}
        </span>

        <button
          onClick={handleIncrement}
          disabled={count >= stock}
          style={{
            padding: "0.5rem 1rem",
            border: "1px solid #007bff",
            backgroundColor: count >= stock ? "#ccc" : "#fff",
            color: count >= stock ? "#666" : "#007bff",
            borderRadius: "4px",
            cursor: count >= stock ? "not-allowed" : "pointer",
          }}
        >
          +
        </button>
      </div>

      <button
        onClick={handleAddToCart}
        style={{
          width: "100%",
          padding: "0.75rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          fontSize: "1rem",
          cursor: "pointer",
          transition: "background-color 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
