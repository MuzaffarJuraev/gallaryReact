import React from "react";

const Img = (props) => {
  const info = props.info;
  return (
    <div id="gallery">
      {info.map((item, id) => {
        return <img src={item.src} key={id} alt="...rasm" />;
      })}
    </div>
  );
};

export default Img;
