import React from "react";
import SearchForm from "../components/SearchForm";
import { useSelector } from "react-redux";

const NotFound = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <main className="not-found">
      <div className="container">
        <div className="content">
          <h1 className="title">This page doesn't seem to exist.</h1>

          <div className="sub-title">
            It looks like the link pointing here was faulty. Maybe try
            searching?
          </div>
          <SearchForm options={products} />
        </div>
      </div>
    </main>
  );
};

export default NotFound;
