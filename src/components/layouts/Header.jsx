import React from "react";
import Container from "../common/Container";
import Flex from "../common/Flex";
import Image from "../common/Image";
import logo from "/src/assets/logo.png";
import Button from "../common/Button";
import { DiAngularSimple } from "react-icons/di";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-amber-700 py-5">
      <Container>
        <Flex className={"justify-between"}>
          <div className="">
           <Link to={"/"}>
            <Image imgSrc={logo} />
           </Link>
          </div>
          <div className="">
            <ul className="flex items-center gap-4">
              <li className="font-openSans text-white font-semibold text-[18px] hover:text-btnClr">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="font-openSans text-white font-semibold text-[18px] hover:text-btnClr">
               <Link to={"about"}>About</Link>
              </li>
              <li className="font-openSans text-white font-semibold text-[18px] hover:text-btnClr">
                Service
              </li>
              <li className="font-openSans text-white font-semibold text-[18px] hover:text-btnClr">
                Portfolio
              </li>
              <li className="font-openSans text-white font-semibold text-[18px] hover:text-btnClr">
                Price
              </li>
              <li className="font-openSans text-white font-semibold text-[18px] hover:text-btnClr">
                Blog
              </li>
            </ul>
          </div>
          <div className="">
            <Button btnTxt={"Contact Us"} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
