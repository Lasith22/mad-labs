import React from 'react';

import ComputerIcon from '../icons/computer 1.svg';
import Clock from '../icons/clock 1.svg';
import Graduate from '../icons/graduate 1.svg';
import PositiveR from '../icons/positive-review 1.svg';
import Rectangle1 from '../icons/Rectangle 4379.png';
import Rectangle2 from '../icons/Rectangle 4381.png';
import Rectangle3 from '../icons/Rectangle 4384.png';
import Star from '../icons/Vector.svg';
import Star2 from '../icons/Vector1.svg';
import Session from '../icons/Vector3.svg';
import { ReactComponent as BigIcon } from '../icons/Group 1000000822.svg';
// import { ReactComponent as BigIcon2 } from '../icons/Group 5thsection.svg';
import { ReactComponent as BigIcon3 } from '../icons/Group 6th.svg';
import Rectangle4 from '../icons/Rectangle 4369.png';
import Rectangle5 from '../icons/Rectangle 43699.png';
import Rectangle6 from '../icons/Rectangle 436999.png';
import Rectangle7 from '../icons/Rectangle 43692.png';
import Rectangle8 from '../icons/Rectangle 43693.png';
import Man from '../icons/ man.png';
import Rectangle7th from '../icons/Vector  7thSectionRectangle.png';
import SmallMan1 from '../icons/Ellipse 1906.svg';
import SmallMan2 from '../icons/Ellipse 19062.svg';
import SmallMan3 from '../icons/Ellipse 19063.svg';
import Comma from '../icons/ comma.svg';
import Minus from '../icons/ minus.svg';
import Plus from '../icons/ PlusIcon.svg';
import MainLogo from '../icons/Group 1000000820.svg';
import VideoIcon from '../icons/Essential icon.svg';
import BigMan from '../icons/ bigMan2.svg';
import CatLegs from '../icons/ CatLegs.svg';
import DockerSvg from '../icons/ Docker.svg';
import Circle1 from '../icons/Ellipse 1.svg';
import AngularIcon from '../icons/Group 1000000816.svg';
import Graph from '../icons/ Graph.svg';
import YellowRec from '../icons/Yellow Rectangle 4376.svg';
import OrangeRec from '../icons/ Orange Rectangle 4375.svg';
// import { ReactComponent as Bag } from '../icons/VectorBag.svg';
// import Footer from '../icons/Vector footer.svg';
import PurplePhone from '../icons/Group purplePhone.svg';
import GreenPhone from '../icons/Group  greenWhatapp.svg';
import MaDLabsLogo from '../icons/ MadLabsLogo.svg';
import Instagram from '../icons/ Insta.svg';
import LinkedIn from '../icons/ LinkedIn.svg';
import Twitter from '../icons/ Twitter.svg';
const Footer = () => {
  return (
    <div className="">
      <div className="flex flex-col justify-center items-center mt-40   ">
        <div className="bg-yellowRecatangle p-10 flex flex-col w-full  max-w-[1051px]   justify-center items-center rounded-lg   relative   ">
          {/* circles */}

          <div className=" absolute  bottom-0 right-0 h-[179px] w-[179px] rounded-tl-full   bg-yellowsmallWhatsapp hidden lg:block"></div>
          <div className="absolute bottom-0 left-0 h-[155px] w-[155px] rounded-tr-full   bg-yellowsmallWhatsapp hidden lg:block"></div>
          <div className="  absolute top-10  left-60  h-[46px] w-[46px] rounded-full    bg-yellowsmallWhatsapp hidden lg:block"></div>
          <h1 className="text-[30px] lg:text-40 font-manrope font-bold mx-20 ">
            Access this right service <br />{' '}
            <span className="ml-20">for you today!</span>
          </h1>

          {/* 2  whats app icons */}
          <div className="flex flex-col lg:flex-row justify-between gap-8 items-center my-10">
            <div className="bg-yellowsmallWhatsapp p-3 flex flex-col w-boxWidth  h-[79px] justify-start items-start rounded-md relative    ">
              <div className="absolute  -top-6 right-5">
                <img src={PurplePhone} alt="" />
              </div>
              <h1 className=" text-16 text-[#5B4508] font-bold font-manrope">
                Email
              </h1>
              <h1 className="f text-[#111827] font-inter text-14 font-normal   ">
                {' '}
                123Kanishka@gmail.com
              </h1>
            </div>
            {/* 2nd whats app box */}
            <div className="bg-yellowsmallWhatsapp p-3 flex flex-col w-boxWidth  h-[79px] justify-start items-start rounded-md relative">
              <div className="absolute  -top-6 right-5">
                <img src={GreenPhone} alt="" />
              </div>
              <h1 className=" text-16 text-[#5B4508] font-bold font-manrope">
                WhatsApp
              </h1>
              <h1 className="f text-[#111827] font-inter text-14 font-normal   ">
                {' '}
                +94 712 332 534
              </h1>
            </div>
          </div>
        </div>
        {/* green rec */}
        <div className="bg-[#597B65] p-10 flex flex-col w-full  max-w-[1388.5px]  justify-center items-center           gap-5      ">
          <div className=" mt-6    ">
            <img src={MaDLabsLogo} className=" " alt="" />
          </div>

          <p className="text-white font-normal font-inter text-14">
            Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit.
            Conse tem ad reiciendis. Corrupti facere ratione natus.
          </p>

          <div className="flex justify-between gap-6 text-white font-semibold font-inter text-14 ">
            <h1>About</h1>
            <h1>Terms</h1>
            <h1> Privacy</h1>
          </div>
          <div className="flex justify-between gap-6">
            <img src={LinkedIn} alt="" />
            <img src={Instagram} alt="" />
            <img src={Twitter} alt="" />
          </div>
          <h1 className="text-white font-normal font-inter text-14">
            ©2023 MadLabs. All rights reserved. Developed and designed by
            www.clounote.com
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
