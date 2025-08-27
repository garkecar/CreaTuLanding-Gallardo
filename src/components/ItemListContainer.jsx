import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../data/mockData";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchProducts = categoryId
      ? getProductsByCategory(categoryId)
      : getProducts();

    fetchProducts
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) {
    return (
      <div
        style={{
          padding: "2rem",
          textAlign: "center",
          minHeight: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2>Cargando productos...</h2>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      {greeting && !categoryId && (
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2
            style={{
              color: "#333",
              fontSize: "2rem",
              fontWeight: "300",
            }}
          >
            {greeting}
          </h2>
        </div>
      )}

      {categoryId && (
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h2
            style={{
              color: "#333",
              fontSize: "1.8rem",
              fontWeight: "400",
            }}
          >
            Categoría: {categoryId === "electronics" ? "Electrónicos" : "Ropa"}
          </h2>
        </div>
      )}

      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
