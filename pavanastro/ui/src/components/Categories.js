import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const Categories = (props) => {
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    await fetch("/api/get-categories/")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories));
  }, []);

  const generateCate = () => {
    let final = [];

    categories.map((category) => {
      final.push(
        <li>
          <Link to={`/blogs/${category[0]}/1`}>
            {category[0]} <span>({category[1]})</span>
          </Link>
        </li>
      );
    });
    return final;
  };

  return (
    <div class="cate">
      <h5>Categories</h5>
      <hr />
      <ul>{categories !== [] ? generateCate() : null}</ul>
    </div>
  );
};

export default Categories;
