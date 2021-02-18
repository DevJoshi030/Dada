import React, { useState, useEffect } from "react";

const Comment = (props) => {
  const [comments, setComments] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(async () => {
    await fetch("/api/get-comments/" + props.slug + "/")
      .then((res) => res.json())
      .then((data) => {
        setCount(data.data.length);
        setComments(data.data);
      });
  }, []);

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

    console.log(parentComments);

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
  );
};

export default Comment;
