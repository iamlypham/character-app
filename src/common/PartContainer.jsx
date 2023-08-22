import React from "react";

const PartContainer = ({ handleClickSetAvatar, pathOfAssets, index }) => {
  let arrayOfParts = [];

  for (let i = 1; i <= index; i++) {
    arrayOfParts.push(
      <img
        onClick={() => handleClickSetAvatar(i, pathOfAssets)}
        key={i}
        src={`/assets/${pathOfAssets}/${i}.png`}
        alt=""
        className="hover:scale-110 shadow-[rgba(0,_0,_0,_0.25)_0px_25px_25px_-25px] transition ease-in-out duration-500 bg-white bg-opacity-10 rounded-xl w-fit flex h-fit justify-center items-center "
      ></img>
    );
  }
  /// array.map(i => <p  onClick={()=>handle} key=> i.context <p/>)
  return (
    <div className="h-5/6 rounded-xl  bottom-0 p-3 w-fit gap-3 grid grid-cols-2 justify-center items-center  overflow-x-scroll absolute ">
      {arrayOfParts}
    </div>
  );
};

export default PartContainer;
