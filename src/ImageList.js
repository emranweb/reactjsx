import React from "react";

function ImageList(props) {
  return (
    <div className="image-wrapper">
      {props.images.map((item) => {
       return  <div key={item.id} className="ui image">
          <img src={item.urls.full} />
        </div>;
      })}
    </div>
  );
}

export default ImageList;
