import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/mockData";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    getProductById(itemId)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  if (loading) {
    return (
      <div
        style={{
          padding: "2rem",
          textAlign: "center",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>Cargando producto...</h2>
      </div>
    );
  }

  if (!product) {
    return (
      <div
        style={{
          padding: "2rem",
          textAlign: "center",
          minHeight: "400px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>Producto no encontrado</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
