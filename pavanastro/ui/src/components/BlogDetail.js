import React, { useState, useEffect } from "react";
import Header from "./Header";

import generateScripts from "../utils/generateScripts";
import removeScripts from "../utils/removeScripts";
import parse from "html-react-parser";
import Categories from "./Categories";

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
              <div class="comments">
                <h4 class="text-uppercase">3 comments </h4>
                <ul class="media-list">
                  {/*=======  COMMENTS =========*/}
                  <li class="media">
                    <div class="media-left">
                      {" "}
                      <a href="#">
                        {" "}
                        <img
                          class="media-object"
                          src="images/avatar-1.jpg"
                          alt=""
                        />{" "}
                      </a>{" "}
                    </div>
                    <div class="media-body">
                      <h6 class="media-heading">
                        Steave Hans<span>Aug 22, 2015 at 11:00 pm</span>
                      </h6>
                      <p>
                        Taque ipsa quae abe illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo nemosala
                        enim ipsam volupitatem quia voluptas sit aspernatur aut
                        odit aut fugite.
                      </p>
                    </div>
                  </li>

                  {/*=======  COMMENTS =========*/}
                  <li class="media margin-l-80">
                    <div class="media-left">
                      {" "}
                      <a href="#">
                        {" "}
                        <img
                          class="media-object"
                          src="images/avatar-2.jpg"
                          alt=""
                        />{" "}
                      </a>{" "}
                    </div>
                    <div class="media-body">
                      <h6 class="media-heading">
                        Jhon Kennadi <span>Aug 22, 2015 at 11:00 pm</span>
                      </h6>
                      <p>
                        Taque ipsa quae abe illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo nemosala
                        enim ipsam volupitatem quia voluptas sit aspernatur aut
                        odit aut fugite.
                      </p>
                    </div>
                  </li>

                  {/*=======  COMMENTS =========*/}
                  <li class="media">
                    <div class="media-left">
                      {" "}
                      <a href="#">
                        {" "}
                        <img
                          class="media-object"
                          src="images/avatar-3.jpg"
                          alt=""
                        />{" "}
                      </a>{" "}
                    </div>
                    <div class="media-body">
                      <h6 class="media-heading">
                        Rock Lancer <span>Aug 22, 2015 at 11:00 pm</span>
                      </h6>
                      <p>
                        Taque ipsa quae abe illo inventore veritatis et quasi
                        architecto beatae vitae dicta sunt explicabo nemosala
                        enim ipsam volupitatem quia voluptas sit aspernatur aut
                        odit aut fugite.
                      </p>
                    </div>
                  </li>
                </ul>

                {/*=======  LEAVE COMMENTS =========*/}
                <h4 class="text-uppercase">leave a comment</h4>
                <form>
                  <div class="row">
                    <div class="col-md-12">
                      <ul class="row">
                        <li class="col-sm-6">
                          <label>
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              placeholder="Name"
                            />
                          </label>
                        </li>
                        <li class="col-sm-6">
                          <label>
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              placeholder="Email"
                            />
                          </label>
                        </li>
                        <li class="col-sm-6">
                          <label>
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              placeholder=" phone number"
                            />
                          </label>
                        </li>
                        <li class="col-sm-6">
                          <label>
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              placeholder="Subject"
                            />
                          </label>
                        </li>
                      </ul>
                    </div>

                    <div class="col-md-12">
                      <ul class="row">
                        <li class="col-sm-12">
                          <label>
                            <textarea
                              class="form-control"
                              placeholder="COMMENTS"
                            ></textarea>
                          </label>
                        </li>
                        <li class="col-sm-12">
                          <button type="submit" class="btn">
                            post comment{" "}
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </form>
              </div>
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
