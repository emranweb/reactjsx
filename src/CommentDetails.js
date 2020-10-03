import React from "react";

const CommentDetails = (props) => {
    //destruecure the property
  const { author, time, avater, content } = props;

  return (
    <div class="comment">
      <a class="avatar">
        <img alt="Avater" src={avater} />
      </a>
      <div class="content">
        <a class="author">{author}</a>
        <div class="metadata">
          <span class="date">{time}</span>
        </div>
        <div class="text">{content}</div>
      </div>
    </div>
  );
};

export default CommentDetails;
