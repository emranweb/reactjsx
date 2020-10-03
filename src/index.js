//import react and react dom
import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";
import faker from "faker";
import CommentApprove from "./CommentApprove.js";

//create a component
const App = () => {
  const text = "hello world and varibale";
  return (
    <div class="ui comments">
      <CommentApprove>
        <CommentDetails
          author="sam"
          time="today at 4:00PM"
          avater={faker.image.avatar()}
          content="First Comment"
        />
      </CommentApprove>
      <CommentApprove>
        <CommentDetails
          author="alex"
          time="today at 5:00PM"
          avater={faker.image.avatar()}
          content="Second Comment"
        />
      </CommentApprove>
      <CommentApprove>
        <CommentDetails
          author="len"
          time="today at 6:00PM"
          avater={faker.image.avatar()}
          content="Third Comment"
        />
      </CommentApprove>
    </div>
  );
};

//show in the app

ReactDOM.render(<App />, document.querySelector("#root"));
