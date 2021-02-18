import React, { useState, useEffect } from "react";
import Header from "./Header";

import generateScripts from "../utils/generateScripts";
import removeScripts from "../utils/removeScripts";
import parse from "html-react-parser";
import Categories from "./Categories";
import Comment from "./Comment";

const BlogDetail = (props) => {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    removeScripts();
    generateScripts();
  }, []);

  useEffect(async () => {
    await fetch("/api/get-blog/" + props.match.params.slug + "/")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);

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

        {/*======= BLOG =========*/}
        <div class="container">
          {/*======= BLOG =========*/}
          <div class="row blog our-blog blog-page single-post sectoion-100px">
            <div class="col-sm-9">
              {/*======= POST 1 =========*/}
              {blog !== {} ? (
                <article>
                  {/* Post */}

                  <div class="blog-in">
                    {/* Post Image */}
                    <div class="blog-up-sec">
                      {" "}
                      <img class="img-responsive" src={blog.image} alt="" />
                      {/* Post Date */}
                      <div class="date-post">{blog.created_at}</div>
                    </div>
                    {/* Post Detail */}
                    {blog.tag}
                    <a href="#." class="heading">
                      {blog.title}
                    </a>
                    <div class="post-details">
                      {parse(blog.content ? blog.content : "")}
                      {/*======= SOCIAL ICONS =========*/}
                      <ul class="social_icons pull-right">
                        <li class="facebook">
                          <a href="#.">
                            <i class="fa fa-facebook"></i>{" "}
                          </a>
                        </li>
                        <li class="twitter">
                          <a href="#.">
                            <i class="fa fa-twitter"></i>{" "}
                          </a>
                        </li>
                        <li class="dribbble">
                          <a href="#.">
                            <i class="fa fa-dribbble"></i>{" "}
                          </a>
                        </li>
                        <li class="instagram">
                          <a href="#.">
                            <i class="fa fa-instagram"></i>{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              ) : null}

              {/*=======  COMMENTS =========*/}
              <Comment slug={props.match.params.slug} />
            </div>

            {/*======= SIDE BAR =========*/}
            {/*======= SIDE BAR =========*/}
            <div class="col-sm-3">
              <div class="side-bar">
                {/*======= CATEGORIES =========*/}
                <Categories />
                {/*======= PAPULAR POST =========*/}
              </div>
            </div>
          </div>
        </div>

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

export default BlogDetail;
