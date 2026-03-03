import React from "react";
import Heading from "../common/Heading";

const Banner = () => {
  return (
    <div className="bg-[url(/src/assets/bannerbg.jpg)] py-62.5 bg-no-repeat bg-center bg-cover">
      <Heading className={"text-center text-4xl text-white font-bold"} text={"Hello This Is Digital #Marketing Agency"} />
    </div>
  );
};

export default Banner;
