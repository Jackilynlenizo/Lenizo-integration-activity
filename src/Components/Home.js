import React, { useEffect, useState } from "react";
import axios from "../axios";

const App = () => {

  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    axios
      .get("/products")
      .then((response) => setProducts(response.data.products))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <>
      {error !== "" && error}
      {products.map((product, index) => {
        return (
          <div className="w-screen "> 

            <h3 key={index}>
            {product.title}
          </h3>
          </div>
        );
      })}
    </>
  );
};

export default App;
