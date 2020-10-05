//import react and react dom
import React from "react";
import ReactDOM from "react-dom";
import CommentDetails from "./CommentDetails";
import faker from "faker";
import CommentApprove from "./CommentApprove.js";
import "./index.style.scss";
import axios from "axios";
import ImageList from "./ImageList.js";
import SearchBar from "./SearchBar.js";
/*
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


*/

class App extends React.Component {
  constructor() {
    super();
    this.state = {images:[] };
  }

  onFormSubmit=(value)=>{
  this.fetchData(value);
  }

  fetchData= async (searchData)=>{
   const response= await axios.get("https://api.unsplash.com/search/photos", {
      params:{
        query:searchData
      },
      headers:{
        Authorization: "Client-ID pCGfXQwe-R9dvfIJv6tYRRjdH5J67DdqUZzIl9C7fnQ"
      }
    })
   
    this.setState({images:response.data.results})
  }

  searchShow= ()=>{
    if(this.state.images.length===0){
      return <h1>0 image found</h1>
    }else{
      return <ImageList images={this.state.images} />
    }
  }


  render() {
      console.log(this.state.images)

    return (
      <div>
        <SearchBar onSubmitForm={this.onFormSubmit} />
        {this.searchShow()}
      </div>
    );
  }
}

//show in the app

ReactDOM.render(<App />, document.querySelector("#root"));
