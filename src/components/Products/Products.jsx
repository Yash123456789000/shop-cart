import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa6";
import { IoFilterOutline } from "react-icons/io5";

const Products = ({ sortOption, handleSortPopup }) => {
  const [search, setSearch] = useState(""); //state for search
  const [productsData, setProductsData] = useState([]); // state for products
  const [isLoading, setIsLoading] = useState(true); // state for loading
  

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProductsData(res.data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const filteredProducts = productsData.filter((record) => {
    const searchValue = search.toLowerCase();
    if (searchValue === "") return true;
    return record.title.toLowerCase().includes(searchValue);
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "lowSort") {
      return a.price - b.price;
    } else if (sortOption === "highSort") {
      return b.price - a.price;
    } else if (sortOption === "ratingSort") {
      return b.rating.rate - a.rating.rate;
    }
    return 0; // No sorting
  });

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        <div className="text-center mb-4 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <div className="relative group block my-6">
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="search"
              className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
            />
            <IoFilterOutline
              onClick={handleSortPopup}
              className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer"
            />
          </div>
        </div>

        <div>
          {isLoading ? (
            <div className="text-center">
              <h1 className="text-xl font-bold text-gray-500">Loading...</h1>
            </div>
          ) : sortedProducts.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
              {sortedProducts.map((data) => (
                <div
                  key={data.id}
                  data-aos="zoom-in"
                  className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] min-h-[350px] flex flex-col items-center p-4"
                >
                  <div className="h-[180px] w-full flex items-center justify-center overflow-hidden mb-4">
                    <img
                      src={data.image}
                      alt="product"
                      className="h-full w-auto transform group-hover:scale-105 duration-300 drop-shadow-md"
                    />
                  </div>
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: Math.floor(data.rating.rate) }).map((_, index) => (
                      <FaStar key={index} className="text-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                    {data.rating.rate.toFixed(1)} / 5
                  </p>
                  <h1 className="text-lg font-semibold mb-2 text-center">{data.title}</h1>
                  <p className="text-primary text-xl font-bold">${data.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center w-full">
              <h1 className="text-2xl font-bold">No Products Found</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
