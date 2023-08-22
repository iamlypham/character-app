import React, { useRef, useState } from "react";
import MainSecond from "../components/MainSecond";
import Header from "./Header";
import HelloComponents from "./HelloComponents";
// import AnimatedMouse from "./AnimatedMouse";
// import background from "../assets/backgroundIMG/background.png";

function MainContainer() {
  const ref = useRef(null);

  const [music, setMusic] = useState("");
  const handleClick = () => {
    // console.log("ABC");
    // setMusic("controls");
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-neutral-300 via-orange-200 to-fuchsia-300 items-center  justify-center h-screen relative flex ">
        <div className="absolute bottom-9">
          <button
            onClick={handleClick}
            className="text-gray-200 border-none outline-none bg-rose-300 md:bg-rose-400 animate-bounce xl:bg-rose-500  w-fit px-3 rounded cursor-pointer"
          >
            Let's Start
          </button>
          <audio
            className="p-3 h-20 block"
            // onPlay={true}
            controls
            src="lofi.mp3"
            type="audio/mp3"
            loop
          />
        </div>
        <div className="absolute right-1/2  w-60 h-72 bg-purple-300 animation-delay-2000 mix-blend-multiply filter blur-xl  opacity-90 rounded-full animate-blob"></div>
        <div className="absolute left-2/4 animate-blob w-60 h-60  bg-yellow-300 mix-blend-multiply filter blur-2xl opacity-90 rounded-full"></div>
        <div className="absolute bottom-3/4 animation-delay-4000 animate-blob  w-60 h-72 bg-orange-300 mix-blend-multiply filter blur-xl opacity-90 rounded-full"></div>
        <Header />
        <HelloComponents handleClick={handleClick} />
      </div>
      <MainSecond ref={ref} />
    </>
  );
}

export default MainContainer;
