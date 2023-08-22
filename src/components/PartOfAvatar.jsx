import React from "react";
// import { body } from "../assets/body";
// This component is stacking to the Avatar Component for render UI
// This is the main of the APP
function PartOfAvatar({ path, index }) {
  /// path === 0
  return (
    <img
      src={`assets/${path}/${index}.png`} ///path === 'bodys'
      // zIndex={zIndex}
      className="absolute h-5/6"
      alt=""
    ></img>
  );
}

export default PartOfAvatar;
