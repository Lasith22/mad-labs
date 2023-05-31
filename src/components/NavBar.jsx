import { useState } from 'react';
import MainLogo from '../icons/Group 1000000820.svg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    // <div>
    //   <div className="flex  justify-between    ml-20    mt-5 px-7 py-5  ">
    //     <div className="     ">
    //       <img src={MainLogo} alt="" />
    //     </div>

    //     <div className="flex items-center gap-10 mr-80   ">
    //       <h1>Courses</h1>
    //       <h1>Testimonials</h1>
    //       <h1>FAQ's</h1>
    //       <h1> Help</h1>
    //       <h1>About Me</h1>
    //     </div>

    //     {/* <div>
    //       <AiOutlineMenu size={20} />
    //     </div> */}

    //     {/* <div className="fixed  right-0 top-0">
    //       <ul className="pt-24">
    //         <li className="p-4">Courses</li>
    //         <li className="p-4"> Testimonials</li>
    //         <li className="p-4">FAQ's </li>
    //         <li className="p-4"> Help</li>
    //         <li className="p-4">About Me </li>
    //       </ul>
    //     </div> */}
    //   </div>
    // </div>
    <nav className="bg-white shadow-lg text-[#111827] text-[14px] font-semibold font-inter">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div>
          <img src={MainLogo} alt="" className="h-8" />
        </div>
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-4   gap-10">
          <h1>Courses</h1>
          <h1>Testimonials</h1>
          <h1>FAQ's</h1>
          <h1> Help</h1>
          <h1>About Me</h1>
        </div>
      </div>
      {showMenu && (
        <div className="md:hidden bg-white py-2">
          <ul className="flex flex-col items-center space-y-4">
            <h1>Courses</h1>
            <h1>Testimonials</h1>
            <h1>FAQ's</h1>
            <h1> Help</h1>
            <h1>About Me</h1>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
