import React from "react";

const Heading = ({ text, className }) => {
  let maintext = text.split(" ");
  console.log(maintext);

  // console.log(maintext);
  maintext.map((item) => {
    // console.log(item);
    // console.log(item.includes("#"));
    if (item.includes("#")) {
      console.log(item);
      let arr = item.split("");

      arr.shift();
      console.log(arr.join(""));
    }
  });

  return <h3 className={`${className}`}>{text}</h3>;
};

export default Heading;
