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
import { ReactComponent as BigIcon2 } from '../icons/Group 5thsection.svg';
// import { ReactComponent as Bag } from '../icons/VectorBag.svg';
// import Footer from '../icons/Vector footer.svg';
import PurplePhone from '../icons/Group purplePhone.svg';
import GreenPhone from '../icons/Group  greenWhatapp.svg';
import MaDLabsLogo from '../icons/ MadLabsLogo.svg';
import Instagram from '../icons/ Insta.svg';
import LinkedIn from '../icons/ LinkedIn.svg';
import Twitter from '../icons/ Twitter.svg';
import SmallCircle from '../icons/ Small circle.svg';
import Star22 from '../icons/ small Star.svg';
import SmallMan4 from '../icons/ SmallMane 1st section.svg';

const Courses = () => {
  return (
    <section>
      <div name="home">
        <div className="flex flex-col bg-white justify-center items-center mt-20 ">
          <div className="">
            <h1 className=" text-[30px] lg:text-[50px] font-bold  ">
              Trending Courses
            </h1>
          </div>

          <p className="mx-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, quod voluptatibus? Ut eos earum accusantium ducimus
          </p>

          <div className="flex flex-col  lg:flex-row justify-evenly items-center gap-10 mt-10   ">
            {/* 1st crd */}
            <div className="flex flex-col gap-5 ">
              <img src={Rectangle1} alt="" />
              <div className="flex flex-col ml-5 gap-3 ">
                <div className="bg-bgYellow  p-1 flex w-1/3 rounded-lg justify-center items-center   ">
                  <h1 className="text-yellow2 font-semibold text-xl font-custom  ">
                    PROFFESSIONAL
                  </h1>
                </div>

                <h1 className="text-2xl font-bold font-inter  ">
                  Docker & Kubertes Course - <br />
                  12 Sessions in 1
                </h1>

                <div className="flex gap-3    ">
                  <h1>4.5</h1>
                  <div className="flex gap-2">
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star2} alt="" />
                  </div>
                  <h1> (120)</h1>
                </div>
                {/* border bottom */}
                <div className="flex border-b"></div>

                {/* prices */}
                <div className=" flex justify-between  ">
                  <div className=" ">
                    <span className="   text-green-600 text-26 font-poppins inline ">
                      RS.1000
                    </span>
                    <span className="inline ml-2">/Session</span>
                  </div>

                  <div className="flex justify-between items-center gap-3 ">
                    <img src={Session} height={18} width={17} alt="" />
                    <span>3 Sessions</span>
                  </div>
                </div>
              </div>
            </div>
            {/* 2nd Crd */}
            <div className="flex flex-col gap-5">
              <img src={Rectangle2} alt="" />
              <div className="flex flex-col ml-5 gap-3 ">
                <div className="bg-bgPurple  p-1 flex w-1/3 rounded-lg justify-center items-center   ">
                  <h1 className="text-purple2 font-semibold text-xl font-custom  ">
                    CAREER CENTRED
                  </h1>
                </div>

                <h1 className="text-2xl font-bold font-inter  ">
                  Full Stack DeveloperootCamp - <br />
                  Course 24 Sessions in 1
                </h1>

                <div className="flex gap-3    ">
                  <h1>4.5</h1>
                  <div className="flex gap-2">
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star2} alt="" />
                  </div>
                  <h1> (120)</h1>
                </div>
                {/* border bottom */}
                <div className="flex border-b"></div>

                {/* prices */}
                <div className=" flex justify-between  ">
                  <div className=" ">
                    <span className="   text-green-600 text-26 font-poppins inline ">
                      RS.1000
                    </span>
                    <span className="inline ml-2">/Session</span>
                  </div>

                  <div className="flex justify-between items-center gap-3 ">
                    <img src={Session} height={18} width={17} alt="" />
                    <span>6 Sessions</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3rd Card */}
            <div className="flex flex-col gap-5">
              <img src={Rectangle3} alt="" />
              <div className="flex flex-col ml-5 gap-3 ">
                <div className="bg-bgDarkOrange  p-1 flex w-1/3 rounded-lg justify-center items-center     ">
                  <h1 className="text-textORange font-semibold text-xl font-custom  ">
                    STUDENTS
                  </h1>
                </div>

                <h1 className="text-2xl font-bold font-inter mb-5  ">
                  GCE O/L ICT COURSE - 8 Sessions in 1
                </h1>

                <div className="flex gap-3    ">
                  <h1>4.5</h1>
                  <div className="flex gap-2">
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star} alt="" />
                    <img src={Star2} alt="" />
                  </div>
                  <h1> (120)</h1>
                </div>
                {/* border bottom */}
                <div className="flex border-b"></div>

                {/* prices */}
                <div className=" flex justify-between  ">
                  <div className=" ">
                    <span className="   text-green-600 text-26 font-poppins inline ">
                      RS.1000
                    </span>
                    <span className="inline ml-2">/Session</span>
                  </div>

                  <div className="flex justify-between items-center gap-3 ">
                    <img src={Session} height={18} width={17} alt="" />
                    <span>9 Sessions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;
