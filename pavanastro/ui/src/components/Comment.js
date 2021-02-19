import React, { useState, useEffect } from "react";

import getCookie from "../utils/getCookie";

const Comment = (props) => {
  const [comments, setComments] = useState([]);
  const [count, setCount] = useState(0);
  const [refresh, setRefresh] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(async () => {
    await fetch("/api/get-comments/" + props.slug + "/")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.data.length);
        setComments(data.data);
      });
  }, [refresh]);

  const handleSubmit = async (e, comment_type, comment_id) => {
    e.preventDefault();
    const csrftoken = getCookie("csrftoken");

    const request_options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": csrftoken,
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        message: message,
        post: props.slug,
        comment_type: comment_type,
        comment_id: comment_id,
      }),
    };

    await fetch("/api/add-comment/", request_options).then((res) => {
      if (res.status === 400) {
        console.log("Error");
      } else {
        setName("");
        setEmail("");
        setMessage("");
        console.log("Success");
      }
      setRefresh((prevRefresh) => !prevRefresh);
    });
  };

  const generateComments = () => {
    let parentComments = [];

    comments.map((comment) => {
      if (comment.parent === null) {
        parentComments.push({
          id: comment.id,
          comment: comment,
          replies: [],
        });
      } else {
        parentComments.map((parent) => {
          if (parent.id === comment.parent) {
            parent.replies.push(comment);
          }
        });
      }
    });

    let final = [];
    parentComments.map((parent) => {
      final.push(
        <li class="media">
          <div class="media-left">
            {" "}
            <a href="#">
              {" "}
              <img class="media-object" src="images/avatar-1.jpg" alt="" />{" "}
            </a>{" "}
          </div>
          <div class="media-body">
            <h6 class="media-heading">
              {parent.comment.name}
              <span>{parent.comment.created_at}</span>
            </h6>
            <p>{parent.comment.message}</p>
            <button
              class="btn btn-post"
              type="button"
              data-toggle="collapse"
              data-target={"#reply" + parent.id}
              aria-expanded="false"
              aria-controls={"reply" + parent.id}
            >
              add reply
            </button>
            <div class="collapse" id={"reply" + parent.id}>
              <div className="col-sm-12">
                <div class="row">
                  <form>
                    <div class="col-md-12">
                      <ul class="row">
                        <li class="col-sm-12 no-border no-padding">
                          <label>
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              class="form-control"
                              name="name"
                              placeholder="Name"
                            />
                          </label>
                        </li>
                        <li class="col-sm-12 no-border  no-padding">
                          <label>
                            <input
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              type="email"
                              class="form-control"
                              name="email"
                              placeholder="Email"
                            />
                          </label>
                        </li>
                      </ul>
                    </div>

                    <div class="col-md-12">
                      <ul class="row">
                        <li class="col-sm-12 no-border  no-padding">
                          <label>
                            <textarea
                              value={message}
                              onChange={(e) => setMessage(e.target.value)}
                              class="form-control"
                              placeholder="COMMENTS"
                            ></textarea>
                          </label>
                        </li>
                        <li class="col-sm-12 no-border  no-padding">
                          <button
                            class="btn"
                            type="button"
                            data-toggle="collapse"
                            data-target={"#reply" + parent.id}
                            aria-expanded="false"
                            aria-controls={"reply" + parent.id}
                            onClick={(e) => handleSubmit(e, "reply", parent.id)}
                          >
                            post reply{" "}
                          </button>
                        </li>
                      </ul>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </li>
      );

      parent.replies.map((reply) => {
        final.push(
          <li class="media margin-l-80">
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
                {reply.name}
                <span>{reply.created_at}</span>
              </h6>
              <p>{reply.message}</p>
            </div>
          </li>
        );
      });
    });
    return final;
  };

  generateComments();

  return (
    <div class="comments">
      <h4 class="text-uppercase">
        {count !== 0 ? count + " comments" : null}{" "}
      </h4>
      <ul class="media-list">
        {/*=======  COMMENTS =========*/}
        {comments ? generateComments() : null}
      </ul>

      {/*=======  LEAVE COMMENTS =========*/}
      <h4 class="text-uppercase">leave a comment</h4>

      <div class="row">
        <form>
          <div class="col-md-12">
            <ul class="row">
              <li class="col-sm-12">
                <label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    class="form-control"
                    name="name"
                    placeholder="Name"
                  />
                </label>
              </li>
              <li class="col-sm-12">
                <label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Email"
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    class="form-control"
                    placeholder="COMMENTS"
                  ></textarea>
                </label>
              </li>
              <li class="col-sm-12">
                <button
                  class="btn"
                  onClick={(e) => handleSubmit(e, "comment", 1)}
                >
                  post comment{" "}
                </button>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Comment;
