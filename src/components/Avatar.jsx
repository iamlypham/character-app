import React from "react";
// import PartList from "./PartList";
import PartOfAvatar from "./PartOfAvatar";
import PartContainer from "../common/PartContainer";
import ReactTypingEffect from "react-typing-effect";
//This is component for main Avatar
const Avatar = ({
  // pathOfAssets,
  handleCustomize,
  handleRestart,
  index, //// ==== 6
  bodys,
  earrings,
  eyebrows,
  eyes,
  facialHairs,
  glasses,
  hairs,
  hats,
  layer1,
  layer2,
  layer3,
  mouths,
  noses,
  neckwears, ///  === {value "neckwears",index = 2}
}) => {
  return (
    //   This is big container for the Avater Component
    <div className="h-screen  md:w-full flex flex-col justify-center items-center relative xl:w-full">
      {/* This is the big container include to the 2 section below */}
      <h1 className="w-full flex justify-center font-light    items-center absolute text-2xl top-1">
        Avatar
      </h1>
      <div className="w-5/6 h-5/6 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]  relative bg-gradient-to-bl from-red-300 via-red-400 to-yellow-300 rounded-xl  md:w-3/5 flex-col xl:w-3/5 flex justify-around  items-center">
        {/* This is for the Avatar picture container */}
        <div className=" backdrop-blur-xl flex-col w-full h-5/6 top-6 p-3 flex justify-center items-center">
          <ReactTypingEffect
            eraseSpeed={25}
            eraseDelay={2000}
            speed={21}
            className="font-bold capitalize text-lg md:text-xl xl:text-xl absolute -top-5 text-cyan-100"
            text={["Be yourself!✌️"]}
          />

          {/* <p className="absolute -top-3 font-light">Make A Cool Avatar!</p> */}
          <div className=" relative rounded-xl text-white w-full h-full justify-center items-center flex">
            <div className="h-full  flex absolute  justify-center items-center filter w-3/4 rounded-3xl  ">
              <div className="h-full text-black w-full backdrop-filter backdrop-blur-3xl flex justify-center items-center  bg-white bg-opacity-20    absolute rounded-3xl">
                <PartOfAvatar index={bodys.index} path={bodys.value} />
                <PartOfAvatar index={earrings.index} path={earrings.value} />
                <PartOfAvatar index={eyebrows.index} path={eyebrows.value} />
                <PartOfAvatar index={eyes.index} path={eyes.value} />
                <PartOfAvatar
                  index={facialHairs.index}
                  path={facialHairs.value}
                />
                <PartOfAvatar index={glasses.index} path={glasses.value} />
                <PartOfAvatar index={hairs.index} s path={hairs.value} />
                <PartOfAvatar index={hats.index} path={hats.value} />
                <PartOfAvatar index={layer1.index} path={layer1.value} />
                <PartOfAvatar index={layer2.index} path={layer2.value} />
                <PartOfAvatar index={layer3.index} path={layer3.value} />
                <PartOfAvatar index={mouths.index} path={mouths.value} />
                <PartOfAvatar index={noses.index} path={noses.value} />
                <PartOfAvatar index={neckwears.index} path={neckwears.value} />
              </div>
            </div>
          </div>
        </div>

        {/* This is for the div contain the 2 button below */}
        <div className="absolute bottom-3 md:bottom-3 xl:bottom-3 w-full flex justify-around items-center">
          <button
            onClick={handleCustomize}
            // type="button"
            className="flex items-center justify-center text-white bg-transparent border-2 border-gray-100 w-fit px-4 py-1 hover:scale-110 transition ease-in outline-none  font-bold  rounded-full text-sm "
          >
            Randomize
          </button>

          <button
            onClick={handleRestart}
            // type="button"
            className="flex items-center justify-center text-white bg-transparent border-2 border-gray-100 w-fit px-4 py-1 hover:scale-110 transition ease-in outline-none  font-bold  rounded-full text-sm "
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
