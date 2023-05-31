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

const MainSection = () => {
  return (
    <div>
      <section className="bg-white pt-20">
        <div className="flex flex-col items-center px-4 mx-auto lg:flex-row">
          <div className="flex flex-col items-center mt-6 lg:items-start lg:w-1/2 xl:mt-0 mx-14">
            <h1 className=" text-[40px]  lg:text-[60px] font-manrope font-bold    ">
              I help you to <br /> build your skills
            </h1>
            <p className="xl:text-18 font-manrope text-textColorBlack block max-w-2xl mt-6 text-16 text-cente lg:text-left xl:text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate quae ver esse fugiat corporis enim magnam maxime amet.
            </p>

            <div className="flex justify-between items-center   mt-6 ">
              <div className="  ">
                <button class="bg-[#E16F38]  text-white   p-2  text-16 font-inter px-6  rounded">
                  Explore Courses
                </button>
              </div>
              <div className="flex justify-betweenitems-center ml-8 gap-3">
                <img src={VideoIcon} alt="" />
                <h1 className="text-buttonOrange text-16 font-inter font-semibold">
                  Watch video
                </h1>
              </div>
            </div>
          </div>

          {/* Big Man image */}
          <div className=" flex justify-center  mt-10  lg:mt-0    ">
            <div className=" relative        ">
              <img
                src={OrangeRec}
                className="  absolute right-40 -bottom-0    "
                alt=""
              />

              <img
                src={BigMan}
                height={763}
                width={430}
                className=" absolute right-30 -bottom-0 right-1/4   "
                alt=""
              />

              <div className="  absolute -right-40 -top-8 ">
                <img src={CatLegs} alt="" />
              </div>
              <div className="flex justify-start  absolute mt-20 -right-60  ">
                <img src={Graph} alt="" />
              </div>
              <img src={YellowRec} className="   " alt="" />
            </div>
          </div>

          <div className="   mb-80   absolute ml-80   hidden lg:block     ">
            <img src={AngularIcon} alt="" className=" ml-80  mb-60  " />
          </div>
          <div className="     absolute ml-80   hidden lg:block     ">
            <img src={Star22} alt="" className=" ml-80    " />
          </div>
          {/* rectange with small rount image */}
          <div className="    relative   z-40  hidden lg:block   ">
            <div className="bg-white bg-opacity-80 p-3 flex flex-row w-boxWidth  h-[79px] justify-start items-start rounded-md  absolute top-40 right-80 gap-5    ">
              <div>
                <img src={SmallMan4} className="      " alt="" />
              </div>

              <div className="flex flex-col gap-2">
                <div className=" bg-indigo-900 bg-opacity-10 p-1 flex   rounded-3xl justify-center items-center mt-2   ">
                  <h1 className="text-[#3734A9] font-semibold text-xl font-manrope  ">
                    + $28,900
                  </h1>
                </div>

                <h1 className="text-[#757095] font-inter text-14 font-semibold">
                  Recieved From Derek
                </h1>
              </div>
            </div>
          </div>
          <div className="         hidden lg:block     ">
            <img
              src={DockerSvg}
              alt=""
              className=" absolute mt-20 ml-12     "
            />
          </div>
        </div>
      </section>
      {/* 2nd section */}
      <section className="  ">
        <div className="  bg-[#597B65]     ">
          <div class=" flex flex-col lg:flex-row  mx-auto  text-white justify-around  items-center  h-full lg:h-[282px]       py-10  ">
            <div className="flex    items-center  gap-10 lg:gap-5 py-7 lg:py-0 ">
              <img src={ComputerIcon} height={60} width={60} alt="" />
              <div className="flex flex-col   ">
                <h1 className="text-50 font-bold">12</h1>
                <h1 className=" font-custom text-18 font-semibold ">
                  Online Courses
                </h1>
              </div>
            </div>

            <div className="flex   items-center gap-10 lg:gap-5 py-7 lg:py-0">
              <img src={Clock} height={60} width={60} alt="" />
              <div className="flex flex-col   ">
                <h1 className=" text-50 font-bold">30 +</h1>
                <h1 className="font-custom text-18 font-semibold">
                  Session Hours
                </h1>
              </div>
            </div>

            <div className="flex  items-center  gap-10 lg:gap-5 py-7 lg:py-0">
              <img src={Graduate} height={60} width={60} alt="" />
              <div className="flex flex-col   ">
                <h1 className=" text-50 font-bold">34</h1>
                <h1 className=" font-custom text-18 font-semibold">
                  Online Students
                </h1>
              </div>
            </div>

            <div className="flex  items-center  gap-10 lg:gap-5 py-7 lg:py-0">
              <img src={PositiveR} height={60} width={60} alt="" />
              <div className="flex flex-col   ">
                <h1 className=" text-50 font-bold">200 +</h1>
                <h1 className=" font-custom text-18 font-semibold">Reviews</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3rd section */}
      <section>
        <div className="flex flex-col bg-white justify-center items-center mt-20 ">
          <h1 className=" text-10xl font-bold  ">Trending Courses</h1>
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
      </section>
      {/* 4rth section */}
      <section>
        <div className="w-[screen]   bg-bgDarkYelloyw   mt-20  p-2 ">
          <div className="flex flex-col lg:flex-row    m-20 gap-4 justify-around   ">
            {/* background svg image */}
            <div className="  align-middle    relative  hidden lg:block    ">
              <BigIcon className="  absolute -bottom-12 left-9" />
            </div>
            <div className="flex flex-col       ">
              <h1 className="mt-20  text-10xl font-bold"> For Professionals</h1>
              {/* <img src={BigIcon} /> */}

              <p className="text-18 font-inter text-darkdray mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                asperiores modi beatae
                <br /> facere eum! Deleniti, consectetur, molestias
                reprehenderit laudantium, a rerum ad aut velit sit?
              </p>
              <div className="mt-10  ">
                <button class="bg-buttonColour1  h-[56px]  text-white   p-2  text-16 font-inter px-6  rounded">
                  View Courses
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center     gap-6">
              {/* 1st crd  */}

              <div className="flex flex-col gap-5">
                <div className="bg-white p-2 rounded-lg mb-10 w-[316px]">
                  <img src={Rectangle4} alt="" />
                  <div className="flex flex-col ml-5 gap-3 ">
                    <div className="bg-bgYellow  p-1 flex w-1/2 rounded-lg justify-center items-center   ">
                      <h1 className="text-yellow2 font-semibold text-xl font-custom  ">
                        PROFFESSIONAL
                      </h1>
                    </div>

                    <h1 className="text-18 font-bold font-inter  ">
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
                    <div className=" flex justify-end  ">
                      <div className="flex    gap-3 ">
                        <img src={Session} height={18} width={17} alt="" />
                        <span>13 Sessions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2nd crd */}
              <div className="mt-0    lg:mt-10  ">
                <div className="flex flex-col gap-5  ">
                  <div className="bg-white p-2 w-[316px] rounded-lg">
                    <img src={Rectangle5} alt="" />
                    <div className="flex flex-col ml-5 gap-3 ">
                      <div className="bg-bgYellow  p-1 flex w-1/2 rounded-lg justify-center items-center mt-2   ">
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

                      <div className="flex border-b"></div>

                      <div className=" flex justify-end  ">
                        <div className="flex justify-between items-center gap-3 ">
                          <img src={Session} height={18} width={17} alt="" />
                          <span>13 Sessions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 5th  */}
      <section>
        <div className="bg-bgPurple1 justify-evenly items-center   flex flex-col-reverse lg:flex-row p-2">
          {/* crd 1 */}
          <div className="bg-white p-2 m-5 rounded-lg my-20">
            <div className="flex flex-col gap-5">
              <img src={Rectangle6} alt="" />

              <div className="flex flex-col ml-5 gap-3 ">
                <div className="bg-bgPurple  p-1 flex w-1/2 rounded-lg justify-center items-center   ">
                  <h1 className="text-purple2 font-semibold text-xl font-custom  ">
                    CAREER CENTRED
                  </h1>
                </div>

                <h1 className="text-18 font-bold font-inter  ">
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
                <div className=" flex justify-end  ">
                  <div className="flex justify-between items-center gap-3 ">
                    <img src={Session} height={18} width={17} alt="" />
                    <span>6 Sessions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* background svg image */}
          <div className="     relative         -top-80 -left-9 hidden lg:block  ">
            <BigIcon2 className="  absolute   top-0   " />
          </div>
          <div className=" mt-20 lg:mt-0  ">
            <h1 className="  text-50 font-manrope font-extrabold">
              Career Centred
            </h1>

            <p className="text-18 font-normal text-textColorBlack font-inter">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              excepturi facilis omnis dolor inventore <br /> numquam impedit
              quaerat. Soluta <br /> neque enim sint, libero provident magnam
              fuga, a dolorum, voluptate minima eaque.
            </p>
            <div className="mt-10  ">
              <button class="bg-buttonPurple   text-white h-[56px]   p-2  text-16 font-inter px-6  rounded">
                View Courses
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* 6th */}
      <section>
        <div className=" bg-bgorange   p-2 ">
          <div className="flex flex-col  lg:flex-row    m-20 gap-4 justify-around ">
            {/* background svg image */}
            <div className="  align-middle    relative   hidden lg:block     ">
              <BigIcon3 className="  absolute -bottom-20 -left-20" />
            </div>
            <div className="flex flex-col">
              <h1 className="mt-20  text-10xl font-bold"> For Students</h1>
              {/* <img src={BigIcon} /> */}

              <p className="text-18 font-inter text-darkdray mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                asperiores modi <br /> beatae facere eum! Deleniti, rerum
                similique. Eius quae mollitia consectetur, molestias
                reprehenderit laudantium, a rerum ad aut velit sit?
              </p>

              <div className="mt-10  ">
                <button class="bg-buttonOrange   text-white   p-2  text-16 font-inter px-6 py-3  rounded">
                  View Courses
                </button>
              </div>
            </div>

            <div className=" flex flex-col md:flex-row justify-between  items-center    gap-6">
              {/* 1st crd  */}
              <div className="bg-white p-2 rounded-lg mb-10 h-[458px]">
                <div className="flex flex-col gap-5">
                  <img src={Rectangle7} alt="" />
                  <div className="flex flex-col ml-5 gap-3 ">
                    <div className="bg-bgYellow  p-1 flex w-1/2 rounded-lg justify-center items-center   ">
                      <h1 className="text-yellow2 font-semibold text-xl font-custom  ">
                        PROFFESSIONAL
                      </h1>
                    </div>

                    <h1 className="text-18 font-bold font-inter  ">
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
                    <div className=" flex justify-end  ">
                      <div className="flex    gap-3 ">
                        <img src={Session} height={18} width={17} alt="" />
                        <span>13 Sessions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2nd crd */}
              <div className=" mt-0    lg:mt-10 ">
                <div className="flex flex-col gap-5  ">
                  <div className="bg-white p-2 rounded-lg h-[458px]">
                    <img src={Rectangle8} alt="" />
                    <div className="flex flex-col ml-5 gap-3 ">
                      <div className="bg-bgYellow  p-1 flex w-1/2 rounded-lg justify-center items-center mt-2   ">
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
                      <div className=" flex justify-end  ">
                        <div className="flex justify-between items-center gap-3 ">
                          <img
                            src={Session}
                            alt="small session svg"
                            height={18}
                            width={17}
                          />
                          <span>13 Sessions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 7th  */}
      <section>
        <div className="my-10">
          <div className="flex justify-between items-center  mx-20 flex-col-reverse lg:flex-row ">
            <div className=" relative mx-6 mt-4 lg:mt-10  ">
              <img src={Rectangle7th} className="   " alt="" />

              <img src={Man} className="absolute top-1 left-20 " alt="" />
            </div>

            <div className="flex flex-col">
              <div className="relative   ">
                <img
                  src={Star22}
                  className="  absolute  left-80 top-0"
                  alt=""
                />
              </div>
              <h1 className="mt-20  text-10xl font-bold">
                {' '}
                No more hassle, <br />{' '}
                <span className="flex ">Pay as you go </span>
              </h1>
              <div className="relative right-40  bottom-60 ">
                <img src={SmallCircle} className="  absolute " alt="" />
              </div>
              {/* <img src={BigIcon} /> */}

              <p className="text-18 font-inter text-darkdray mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                asperiores modi <br /> beatae facere eum! Deleniti, rerum
                similique. Eius quae mollitia consectetur, molestias
                reprehenderit <br /> laudantium, a rerum ad aut velit sit?
              </p>
              <p className="text-18 font-inter text-darkdray mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                asperiores modi <br /> beatae facere eum! Deleniti, rerum
                similique. Eius quae mollitia consectetur, molestias
                reprehenderit laudantium, <br /> a rerum ad aut velit sit?
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 8th  */}
      <section>
        <div className="bg-bgDark">
          <div className="flex justify-center items-center m-10  flex-col lg:flex-row">
            <div className="flex flex-col mr-20">
              <div className=" items-center justify-center lg:items-start   xl:mt-0">
                <h1 className="mt-20  text-10xl font-bold  ">
                  Real Stories from <br />{' '}
                  <span className="flex "> Real Customers </span>
                </h1>
                <h1>Get nspired by these stories.</h1>
              </div>
              {/* 1st crd */}
              <div className="bg-white  max-w-sm rounded overflow-hidden shadow-lg  p-4 flex flex-col justify-end items-start   mt-5 ml-10   ">
                <img src={SmallMan1} width={40} height={40} alt="" />
                <img className="mt-2" src={Comma} alt="" />
                <div className="flex flex-col   ml-9 text-smallText font-inter text-18 font-normal">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorem laborum eum illum molestiae labore cumque atque
                    obcaecati assumenda, hic nisi reiciendis consectetur cum
                    cupiditate.
                  </p>
                  <h1 className="  font-semibold mt-2">Floyd Miles</h1>
                  <h1 className="text-darkText text-14">
                    Vise President GoPro
                  </h1>
                </div>
              </div>
            </div>
            {/* 2nd crd */}
            <div className="flex flex-col gap-5 mt-10 lg:mt-40  mr-10  lg:ml-10   ">
              <div className="bg-white  max-w-sm rounded overflow-hidden shadow-lg  p-4 flex flex-col justify-end items-start   mt-5   ">
                <img src={SmallMan2} width={40} height={40} alt="" />
                <img className="mt-2" src={Comma} alt="" />
                <div className="flex flex-col   ml-9 text-smallText font-inter text-18 font-normal">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Dolorem laborum eum illum molestiae labore cumque atque
                    obcaecati assumenda, hic nisi reiciendis consectetur cum
                    cupiditate. lo
                  </p>
                  <h1 className="  font-semibold mt-2">Floyd Miles</h1>
                  <h1 className="text-darkText text-14">
                    Vise President GoPro
                  </h1>
                </div>
              </div>
              <div className="bg-white  max-w-sm rounded overflow-hidden shadow-lg  p-4 flex flex-col justify-end items-start  my-10   ">
                <img src={SmallMan3} width={40} height={40} alt="" />
                <img className="mt-2" src={Comma} alt="" />
                <div className="flex flex-col   ml-9 text-smallText font-inter text-18 font-normal">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  </p>
                  <h1 className="  font-semibold mt-2">Floyd Miles</h1>
                  <h1 className="text-darkText text-14">
                    Vise President GoPro
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 9th */}
      <section>
        <div className="flex flex-col lg:flex-row   mx-20">
          {/* Any quiations sections */}
          <div className="flex flex-col">
            <h1 className="text-10xl font-bold font-manrope  ">
              Any quations? <br /> We got you.
            </h1>
            <p className="text-18 font-inter text-darkdray mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              asperiores modi <br /> beatae facere eum! Deleniti, rerum
              similique. Eius quae mollitia consectetur, molestias reprehenderit{' '}
              <br /> laudantium, a rerum ad aut velit sit?
            </p>
          </div>
          {/* how this work section */}
          <div className="flex flex-col ml-0 lg:ml-20 mt-10 lg:mt-0">
            <div className="flex items-stretch justify-between  gap-20  ">
              <h1 className="text-20 font-semibold font-manrope">
                How this work?
              </h1>

              <img src={Minus} alt="" />
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              provident suscipit nobis. <br /> Obcaecati, sapiente? Optio
              voluptas harum dolores quae aut q labore officia?
            </p>
            {/* border bottom */}
            <div className="flex border-b my-10"></div>

            <div className="flex items-stretch justify-between  gap-20  ">
              <h1 className="text-20 font-semibold font-manrope">
                Are there any additional Fee?
              </h1>

              <img src={Plus} alt="" />
            </div>
            {/* border bottom */}
            <div className="flex border-b my-10"></div>

            <div className="flex items-stretch justify-between  gap-20  ">
              <h1 className="text-20 font-semibold font-manrope">
                How Can I get the course?
              </h1>

              <img src={Plus} alt="" />
            </div>
            {/* border bottom */}
            <div className="flex border-b my-10"></div>

            <div className="flex items-stretch justify-between  gap-20  ">
              <h1 className="text-20 font-semibold font-manrope">
                What materials do you offer and other not?
              </h1>

              <img src={Plus} alt="" />
            </div>
            {/* border bottom */}
            <div className="flex border-b my-10"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainSection;
