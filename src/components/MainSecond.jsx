import React from "react";
import { useEffect, useState } from "react";
import Avatar from "./Avatar";
import { forwardRef } from "react";
import PartList from "./PartList";
const total = {
  earrings: 32,
  bodys: 17,
  eyes: 17,
  hairs: 73,
  mouths: 24,
  facialHairs: 17,
  eyebrows: 15,
  hats: 28,
  glasses: 17,
  layer1: 5,
  layer2: 5,
  layer3: 9,
  noses: 1,
  neckwear: 18,
};
const MainSecond = ({}, ref) => {
  const [bodys, setBodys] = useState({ value: "body", index: 0 });
  const [earrings, setEarrings] = useState({ value: "earrings", index: 0 });
  const [eyesbrows, setEyesbrows] = useState({ value: "eyebrows", index: 0 });
  const [eyes, setEyes] = useState({ value: "eyes", index: 0 });
  const [facialHairs, setFacialHairs] = useState({
    value: "facialHairs",
    index: 0,
  });
  const [glasses, setGlasses] = useState({ value: "glasses", index: 0 });
  const [hairs, setHairs] = useState({ value: "hairs", index: 0 });
  const [hats, setHats] = useState({ value: "hats", index: 0 });
  const [layer1, setLayer1] = useState({ value: "layer_1", index: 0 });
  const [layer2, setLayer2] = useState({ value: "layer_2", index: 0 });
  const [layer3, setLayer3] = useState({ value: "layer_3", index: 0 });
  const [mouths, setMouths] = useState({ value: "mouths", index: 0 });
  const [noses, setNoses] = useState({ value: "noses", index: 0 });
  const [neckwears, setNeckwears] = useState({ value: "neckwear", index: 0 });
  // const [index, setIndex] = useState();
  //
  // this is take the path and number index sucesss

  const handleCustomize = () => {
    setFacialHairs((e) => ({
      ...e,
      index: Math.floor(Math.random() * total.facialHairs),
    }));
    setEarrings((e) => ({
      ...e,
      index: Math.floor(Math.random() * total.earrings),
    }));
    setEyesbrows((e) => ({
      ...e,
      index: Math.floor(Math.random() * total.eyebrows),
    }));
    setGlasses((e) => ({
      ...e,
      index: Math.floor(Math.random() * total.glasses),
    }));
    setHairs((e) => ({
      ...e,
      index: Math.floor(Math.random() * total.hairs),
    }));
    setHats((e) => ({
      ...e,
      index: Math.floor(Math.random() * total.hats),
    }));
    setLayer3((e) => ({
      ...e,
      index: Math.floor(Math.random() * total.layer3),
    }));
    setLayer2((e) => ({
      ...e,
      index: Math.floor(Math.random() * total.layer2),
    }));
    setLayer1((e) => ({
      ...e,
      index: Math.floor(Math.random() * total.layer1),
    }));
    setNeckwears((e) => ({
      ...e,
      index: Math.floor(Math.random() * total.neckwear),
    }));
    setNoses((e) => ({
      ...e,
      index: Math.floor(Math.random() * total.noses),
    }));
    setMouths((e) => ({
      ...e,
      index: Math.floor(Math.random() * total.mouths),
    }));
    setBodys((e) => ({
      ...e,
      index: Math.floor(Math.random() * total.bodys),
    }));
    setEyes((e) => ({
      ...e,
      index: Math.floor(Math.random() * total.eyes),
    }));
  };

  const handleRestart = () => {
    setFacialHairs((e) => ({
      ...e,
      index: 0,
    }));
    setEarrings((e) => ({
      ...e,
      index: 0,
    }));
    setEyesbrows((e) => ({
      ...e,
      index: 0,
    }));
    setGlasses((e) => ({
      ...e,
      index: 0,
    }));
    setHairs((e) => ({
      ...e,
      index: 0,
    }));
    setHats((e) => ({
      ...e,
      index: 0,
    }));
    setLayer3((e) => ({
      ...e,
      index: 0,
    }));
    setLayer2((e) => ({
      ...e,
      index: 0,
    }));
    setLayer1((e) => ({
      ...e,
      index: 0,
    }));
    setNeckwears((e) => ({
      ...e,
      index: 0,
    }));
    setNoses((e) => ({
      ...e,
      index: 0,
    }));
    setMouths((e) => ({
      ...e,
      index: 0,
    }));
    setBodys((e) => ({
      ...e,
      index: 0,
    }));
    setEyes((e) => ({
      ...e,
      index: 0,
    }));
  };

  const handleClickSetAvatar = (i, value) => {
    if (value === "facialHairs") setFacialHairs((e) => ({ ...e, index: i }));
    if (value === "earrings") setEarrings((e) => ({ ...e, index: i }));
    if (value === "eyebrows") setEyesbrows((e) => ({ ...e, index: i }));
    if (value === "glasses") setGlasses((e) => ({ ...e, index: i }));
    if (value === "hairs") setHairs((e) => ({ ...e, index: i }));
    if (value === "hats") setHats((e) => ({ ...e, index: i }));
    if (value === "layer_3") setLayer3((e) => ({ ...e, index: i }));
    if (value === "layer_2") setLayer2((e) => ({ ...e, index: i }));
    if (value === "layer_1") setLayer1((e) => ({ ...e, index: i }));
    if (value === "neckwear") setNeckwears((e) => ({ ...e, index: i }));
    if (value === "eyes") setEyes((e) => ({ ...e, index: i }));
    if (value === "noses") setNoses((e) => ({ ...e, index: i }));
    if (value === "body") setBodys((e) => ({ ...e, index: i }));
    if (value === "mouths") setMouths((e) => ({ ...e, index: i })); //(mouths.index = i)
    // batching  /// shallow compared  /// type reference // type value  M2.2 React Router , Redux , Database , RestFul API // SPA // redux router
  };

  return (
    <div className="w-full h-fit justify-center sm:flex-col md:flex-row xl:flex-row items-center flex flex-col bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-red-300 via-amber-500 to-cyan-100">
      <div
        className="w-full md:w-4/5 xl:w-4/5 flex flex-col sm:flex-col md:flex-row xl:flex-row h-fit "
        ref={ref}
      >
        <Avatar
          handleCustomize={handleCustomize}
          handleRestart={handleRestart}
          bodys={bodys}
          earrings={earrings}
          eyebrows={eyesbrows}
          eyes={eyes}
          hats={hats}
          hairs={hairs}
          layer1={layer1}
          layer2={layer2}
          layer3={layer3}
          noses={noses}
          mouths={mouths}
          facialHairs={facialHairs}
          neckwears={neckwears} ///  === {value "neckwears",index = 2}
          glasses={glasses}
          // index={index}

          // {  <part folders={neckwears.value} index={neckwears.index} >}
        />
      </div>

      <div className="w-full h-fit md:w-2/4 xl:w-2/4">
        <PartList handleClickSetAvatar={handleClickSetAvatar} />
      </div>
    </div>
  );
};

export default forwardRef(MainSecond);
