import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { getProducts, getProductsByCategory } from "../services/products";
import ItemList from "./ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = categoryId
        ? await getProductsByCategory(categoryId)
        : await getProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchData();
  }, [categoryId]);

  if (loading)
    return <h2 style={{ textAlign: "center" }}>Cargando productos...</h2>;

  return (
    <div style={{ padding: "2rem" }}>
      {greeting && !categoryId && (
        <h2 style={{ textAlign: "center" }}>{greeting}</h2>
      )}
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
