import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

const OurBlog = (props) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(async () => {
    await fetch("/api/blog-two-list/")
      .then((res) => res.json())
      .then((data) => setBlogs(data.data));
  }, []);

  const generate = () => {
    if (blogs === []) {
      return;
    }
    let final = [];
    blogs.map((blog) => {
      final.push(
        <div class="col-md-6">
          <div class="blog-in">
            {/* Post Image */}
            <div class="blog-up-sec">
              {" "}
              <img
                class="img-responsive"
                width="600px"
                height="338px"
                src={blog.image}
                alt=""
              />
              {/* Post Date */}
              <div class="date-post">
                {blog.created_at}
                <img src="/static/images/icon-date-post.png" alt="" />{" "}
              </div>
            </div>
            {/* Post Detail */}
            <span>{blog.tag}</span>{" "}
            <Link to={`/blog/${blog.slug}`} class="heading">
              {blog.title}
            </Link>
            <p>{blog.description}</p>
          </div>
        </div>
      );
    });
    return final;
  };
  return (
    <section class="sectoion-100px our-blog">
      <div class="container">
        {/* Tittle */}
        <div class="tittle">
          <h4>latest from our blog</h4>
          <p>
            He's a demon on wheels. The mate was a mighty sailin' man the
            Skipper brave and sure. Five passengers set sail that day for a
            three hour tour a three hour tour the ship set ground on the shore
            of this uncharted
          </p>
        </div>
        {/* Blog Post */}
        <div class="row">
          {/* Post */}
          {blogs !== [] ? generate() : null}
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
