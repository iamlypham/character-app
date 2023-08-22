import React from "react";
import { useState } from "react";
import PartContainer from "./../common/PartContainer";
const total = {
  earrings: { total: 32, pathOfAssets: "earrings" },
  bodies: { total: 17, pathOfAssets: "body" },
  eyes: { total: 17, pathOfAssets: "eyes" },
  hairs: { total: 73, pathOfAssets: "hairs" },
  mouths: { total: 24, pathOfAssets: "mouths" },
  beards: { total: 17, pathOfAssets: "facialHairs" },
  eyebrows: { total: 15, pathOfAssets: "eyebrows" },
  hats: { total: 28, pathOfAssets: "hats" },
  glasses: { total: 17, pathOfAssets: "glasses" },
  basics: { total: 5, pathOfAssets: "layer_1" },
  layers: { total: 5, pathOfAssets: "layer_2" },
  wearings: { total: 9, pathOfAssets: "layer_3" },
  noses: { total: 1, pathOfAssets: "noses" },
  neckwear: { total: 18, pathOfAssets: "neckwear" },
};

//This component is a container to contain the part of every body array.
const PartList = ({ handleClickSetAvatar }) => {
  const [selectedObject, setSelectedObject] = useState(null);
  ///This contant for rendering the all buttons of the list

  const totalButtons = [
    //This is a arrays of Object. In a object having 2 key, one is id nad name.
    {
      id: 0,
      name: "earrings",
    },
    {
      id: 1,
      name: "glasses",
    },
    {
      id: 2,
      name: "hats",
    },
    {
      id: 4,
      name: "neckwear",
    },
    {
      id: 5,
      name: "bodies",
    },
    {
      id: 6,
      name: "eyebrows",
    },
    {
      id: 7,
      name: "eyes",
    },
    {
      id: 8,
      name: "beards",
    },
    {
      id: 9,
      name: "hairs",
    },
    {
      id: 10,
      name: "mouths",
    },
    {
      id: 11,
      name: "noses",
    },

    {
      id: 12,
      name: "basics",
    },
    {
      id: 13,
      name: "layers",
    },
    {
      id: 14,
      name: "wearings",
    },
  ];

  // this button work very well.
  const handleClick = (name) => {
    //name = glasses
    setSelectedObject(total[name]); //<<-- setSelectedObject(total["glasses"]);
    //total["hairs"] <=> total.hairs

    // { total: 73, pathOfAssets: "hairs" }

    // setSelectObject({ total: 73, pathOfAssets: "hairs" });

    // selectedObject = { total: 73, pathOfAssets: "hairs" }
  };

  return (
    <div className="h-screen relative justify-center items-center pb-3  w-full flex flex-col">
      {/* This using the main Container */}
      <h1 className="w-full font- flex justify-center items-center font-light  absolute text-2xl top-1">
        Character
      </h1>
      <div className="w-3/4 h-5/6 absolute bottom-8 m-3 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  justify-center bg-gradient-to-tr from-red-300 via-red-400 to-yellow-300 rounded-xl  items-center flex">
        <div className=" absolute m-1 py-3 pl-3 scroll-smooth hover:scroll-auto top-1 md:top-2 xl:top-3 flex flex-row overflow-x-scroll w-full gap-3">
          {/* This one using method to render from the arrays of the buttons. */}
          {/* Total: 14buttons and it is a array */}
          {totalButtons.map((button) => (
            <button
              key={button.id}
              className=" px-3 py-1 text-xs font-light border-2 text-white  hover:scale-110 transition ease-in-out capitalize rounded-full"
              onClick={() => handleClick(button.name)} // button glasses -> button.name => "glasses" => handleClick("glasses")
            >
              {button.name}
            </button>
          ))}
        </div>

        <PartContainer
          handleClickSetAvatar={handleClickSetAvatar}
          pathOfAssets={selectedObject?.pathOfAssets} // selectedObject.pathOfAssets -> null?.pathOfAssets -> undefined?.path { total: 73, pathOfAssets: "hairs" }?.pathOfAssets
          index={selectedObject?.total} // change index to the correct Name of props.
        />
      </div>
    </div>
    // </div>
  );
};

export default PartList;
