import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Header from "./Header";

import generateScripts from "../utils/generateScripts";
import removeScripts from "../utils/removeScripts";
import Categories from "./Categories";

const BlogCategoryList = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    removeScripts();
    generateScripts();
  }, []);

  useEffect(async () => {
    await fetch(
      "/api/blog-list-category/" +
        props.match.params.category +
        "/" +
        props.match.params.page +
        "/"
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data.data));
  }, [page, props.match.params.category]);

  useEffect(async () => {
    await fetch("/api/pagecount/" + props.match.params.category + "/")
      .then((res) => res.json())
      .then((data) => setCount(data.count));
  }, [props.match.params.category]);

  const generate = () => {
    let final = [];
    blogs.map((blog) => {
      final.push(
        <div class="blog-in">
          {/* Post Image */}
          <div class="blog-up-sec">
            {" "}
            <img class="img-responsive" src={blog.image} alt="" />
            {/* Post Date */}
            <div class="date-post">{blog.created_at}</div>
          </div>
          {/* Post Detail */}
          <span>{blog.tag}</span>
          <Link to={`/blog/${blog.slug}`} class="heading">
            {blog.title}
          </Link>
          <p>{blog.description}</p>
        </div>
      );
    });
    return final;
  };

  const generatePages = () => {
    let final = [];

    for (let i = 0; i < count; i++) {
      final.push(
        <li>
          <Link
            to={`/blogs/${props.match.params.category}/${i + 1}`}
            onClick={() => setPage((prevPage) => !prevPage)}
          >
            {i + 1}
          </Link>
        </li>
      );
    }
    return final;
  };

  return (
    <div id="wrap">
      <div id="main-wrapper">
        <Header />

        {/*======= SUB BANNER =========*/}
        <section class="sub-banner">
          <div class="container">
            <div class="position-center-center">
              <h2>OUR BLOG</h2>
            </div>
          </div>
        </section>

        {/*======= Blog =========*/}
        <section class="sectoion-100px our-blog blog-page">
          <div class="container">
            {/* Blog Post */}
            <div class="row">
              <div class="col-md-9">
                {/* Post */}
                {blogs !== [] ? generate() : null}

                {/*======= Pagination =========*/}
                <ul class="pagination">{generatePages()}</ul>
              </div>

              {/*======= SIDE BAR =========*/}
              <div class="col-sm-3">
                <div class="side-bar">
                  {/*======= CATEGORIES =========*/}
                  <Categories />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*======= clients-logo =========*/}
        <section class="sectoion-100px promo">
          <div class="container">
            <div class="position-center-center">
              <h5>Do you want to discuss with us?</h5>
              <a href="#." class="btn">
                CONTACT US
              </a>{" "}
            </div>
          </div>
        </section>

        {/*======= FOOTER UP =========*/}
        <section class="footer-up">
          <div class="col-sm-6">
            <div class="work">
              {" "}
              <i class="ion-map"></i>
              <p>
                09 Design Street, Downtown <br />
                victoria, Australia
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class="contact">
              {/*======= Social Icon =========*/}
              <ul class="social_icons">
                <li class="facebook">
                  <a class="facebook" href="#.">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li class="twitter">
                  <a class="twitter" href="#.">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li class="linkedin">
                  <a class="linkedin" href="#.">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
              <p>Copyright © 2015 - All Rights Reserved</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogCategoryList;
