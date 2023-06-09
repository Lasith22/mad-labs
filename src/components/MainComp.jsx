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

const MainComp = () => {
  return (
    <div>
      <div>
        {/* for first part */}
        <div className=" w-[screen]   ">
          <div className="flex justify-start items-center ml-20 gap-20  mt-5 px-4 py-5  ">
            <div className="     ">
              <img src={MainLogo} alt="" />
            </div>

            <div className="flex items-center gap-10    ">
              <h1>Courses</h1>
              <h1>Testimonials</h1>
              <h1>FAQ's</h1>
              <h1> Help</h1>
              <h1>About Me</h1>
            </div>
          </div>
          <div className="flex justify-start ml-60 mt-10  ">
            <img src={Circle1} alt="" className="absolute" />
          </div>
          <div className="flex justify-center     mt-10   ">
            <img src={AngularIcon} alt="" className="absolute" />
          </div>

          {/* after logo section */}
          <div className="flex justify-between    gap-10 -mt-20  mx-20   ">
            <div className="flex flex-col justify-center items-start gap-5">
              <h1 className="text-60 font-manrope font-bold">
                I help you to <br /> build your skills
              </h1>
              <p className="text-18 font-manrope text-textColorBlack">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptate quae ver esse fugiat corporis <br /> enim magnam
                maxime amet.
              </p>

              <div className="flex justify-between items-center gap-8">
                <div className="  ">
                  <button class="bg-buttonOrange   text-white   p-2  text-16 font-inter px-6  rounded">
                    Explore Courses
                  </button>
                </div>
                <img src={VideoIcon} alt="" />
                <h1 className="text-buttonOrange text-16 font-inter font-semibold">
                  Watch video
                </h1>
              </div>
            </div>

            {/* big man part */}

            <div className="">
              <div className=" absolute">
                <img src={CatLegs} alt="" />
              </div>

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
                <div className="flex justify-start  absolute mt-20 -right-60  ">
                  <img src={Graph} alt="" />
                </div>
                <img src={YellowRec} className="   " alt="" />
              </div>
              <div className=" flex justify-center items-end     relative   ">
                <img src={DockerSvg} alt="" className=" absolute left-80 " />
              </div>
            </div>

            <div></div>
          </div>
        </div>
        {/* for second part */}
        <div className="w-full bg-madlabsGreen">
          <div class=" flex    mx-auto    text-white justify-around  h-[282px]        py-10  ">
            <div className="flex   justify-evenly items-center gap-5">
              <img src={ComputerIcon} height={60} width={60} alt="" />
              <div className="flex flex-col   ">
                <h1 className="text-50 font-bold">12</h1>
                <h1 className=" font-custom text-18 font-semibold ">
                  Online Courses
                </h1>
              </div>
            </div>

            <div className="flex justify-evenly items-center gap-5">
              <img src={Clock} height={60} width={60} alt="" />
              <div className="flex flex-col   ">
                <h1 className=" text-50 font-bold">30 +</h1>
                <h1 className="font-custom text-18 font-semibold">
                  Session Hours
                </h1>
              </div>
            </div>

            <div className="flex justify-evenly items-center gap-5">
              <img src={Graduate} height={60} width={60} alt="" />
              <div className="flex flex-col   ">
                <h1 className=" text-50 font-bold">34</h1>
                <h1 className=" font-custom text-18 font-semibold">
                  Online Students
                </h1>
              </div>
            </div>

            <div className="flex justify-evenly items-center gap-5">
              <img src={PositiveR} height={60} width={60} alt="" />
              <div className="flex flex-col   ">
                <h1 className=" text-50 font-bold">200 +</h1>
                <h1 className=" font-custom text-18 font-semibold">Reviews</h1>
              </div>
            </div>
          </div>
        </div>
        {/* 3rd Part */}
        <div className="flex flex-col bg-white justify-center items-center mt-20 ">
          <h1 className=" text-10xl font-bold  ">Trending Courses</h1>
          <p className="mx-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, quod voluptatibus? Ut eos earum accusantium ducimus
            molestiae, reprehenderit vero illum odit explicabo quam eveniet ipsa
            consequuntur eius voluptatum culpa dolores?
          </p>

          <div className="flex justify-evenly items-center gap-10 mt-10 ">
            {/* 1st crd */}
            <div className="flex flex-col gap-5">
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

        {/* 4rth Section */}
        <div className="w-[screen]   bg-bgDarkYelloyw   mt-20  p-2 ">
          <div className="flex    m-20 gap-4 justify-around   ">
            {/* background svg image */}
            <div className=" inline-block align-middle    relative      ">
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

            <div className="flex justify-between     gap-6">
              {/* 1st crd  */}
              <div className="bg-white p-2 rounded-lg mb-10">
                <div className="flex flex-col gap-5">
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
              <div className="mt-10">
                <div className="flex flex-col gap-5  ">
                  <div className="bg-white p-2 rounded-lg">
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
                      {/* border bottom */}
                      <div className="flex border-b"></div>

                      {/* prices */}
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

        {/* 5th section */}
        <div className="bg-bgPurple1 justify-evenly items-center   flex p-2">
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

          <div className="  ">
            {/* background svg image */}
            {/* <div className=" inline-block     relative        ">
              <BigIcon2 className="  absolute   bottom-1 top-1 left-9   " />
            </div> */}
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
        {/* 6th section */}
        <div className=" bg-bgorange   p-2 ">
          <div className="flex    m-20 gap-4 justify-around ">
            {/* background svg image */}
            <div className=" inline-block align-middle    relative     ">
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

            <div className="flex justify-between     gap-6">
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
              <div className="mt-10">
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

        {/* 7th section */}
        <div className="bg-white    ">
          <div>
            <div className="flex justify-between items-center  mx-20 ">
              <div className=" relative mx-6   ">
                <img src={Rectangle7th} className="   " alt="" />
                <img src={Man} className="absolute top-1 left-20 " alt="" />
              </div>
              <div className="flex flex-col">
                <h1 className="mt-20  text-10xl font-bold">
                  {' '}
                  No more hassle, <br />{' '}
                  <span className="flex ">Pay as you go </span>
                </h1>
                {/* <img src={BigIcon} /> */}

                <p className="text-18 font-inter text-darkdray mt-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam asperiores modi <br /> beatae facere eum! Deleniti,
                  rerum similique. Eius quae mollitia consectetur, molestias
                  reprehenderit <br /> laudantium, a rerum ad aut velit sit?
                </p>
                <p className="text-18 font-inter text-darkdray mt-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam asperiores modi <br /> beatae facere eum! Deleniti,
                  rerum similique. Eius quae mollitia consectetur, molestias
                  reprehenderit laudantium, <br /> a rerum ad aut velit sit?
                </p>
              </div>
            </div>
          </div>

          {/* 8th section */}
          <div className="bg-bgDark">
            <div className="flex justify-center items-center m-10 ">
              <div className="flex flex-col mr-20">
                <div className="">
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
              <div className="flex flex-col gap-5 mt-40 ml-10">
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

          {/* 9th section */}
          <div className="mb-20 flex flex-col gap-10">
            {/* for 1st two sections */}
            <div className="flex   mx-20">
              {/* Any quiations sections */}
              <div className="flex flex-col">
                <h1 className="text-10xl font-bold font-manrope  ">
                  Any quations? <br /> We got you.
                </h1>
                <p className="text-18 font-inter text-darkdray mt-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam asperiores modi <br /> beatae facere eum! Deleniti,
                  rerum similique. Eius quae mollitia consectetur, molestias
                  reprehenderit <br /> laudantium, a rerum ad aut velit sit?
                </p>
              </div>
              {/* how this work section */}
              <div className="flex flex-col ml-20">
                <div className="flex items-stretch justify-between  gap-20  ">
                  <h1 className="text-20 font-semibold font-manrope">
                    How this work?
                  </h1>

                  <img src={Minus} alt="" />
                </div>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem provident suscipit nobis. <br /> Obcaecati, sapiente?
                  Optio voluptas harum dolores quae aut q labore officia?
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
            {/* yellow rectangle section */}
            <div className="flex flex-col justify-center items-center mt-10 ">
              <div className="bg-yellowRecatangle p-10 flex flex-col w-full  max-w-[1051px] h-[315px] justify-center items-center rounded-lg absolute z-20 -mt-80  ">
                {/* circles */}
                <div className="absolute bottom-0 right-0 h-[179px] w-[179px] rounded-tl-full   bg-yellowsmallWhatsapp"></div>
                <div className="absolute bottom-0 left-0 h-[155px] w-[155px] rounded-tr-full   bg-yellowsmallWhatsapp"></div>
                <div className="  absolute top-10  left-60  h-[46px] w-[46px] rounded-full    bg-yellowsmallWhatsapp"></div>
                <h1 className="text-40 font-manrope font-bold mx-20">
                  Access this right service <br />{' '}
                  <span className="ml-20">for you today!</span>
                </h1>

                {/* 2  whats app icons */}
                <div className="flex justify-between gap-8 items-center my-10">
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
              <div className="bg-[#597B65] p-10 flex flex-col w-full  max-w-[1388.5px] h-[452.22px] justify-center items-center   relative    z-1 mt-20 gap-5     ">
                <div className=" mt-6   ">
                  <img src={MaDLabsLogo} className="mt-40" alt="" />
                </div>

                <p className="text-white font-normal font-inter text-14">
                  Lorem ipsum dolor sit amet, consectetur adipisicing <br />{' '}
                  elit. Conse tem ad reiciendis. Corrupti facere ratione natus.
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
        </div>
      </div>
    </div>
  );
};

export default MainComp;
