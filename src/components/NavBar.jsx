import { useState } from 'react';
import MainLogo from '../icons/Group 1000000820.svg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
      <div className="flex  justify-between    ml-20    mt-5 px-7 py-5  ">
        <div className="     ">
          <img src={MainLogo} alt="" />
        </div>

        <div className="flex items-center gap-10 mr-80   ">
          <h1>Courses</h1>
          <h1>Testimonials</h1>
          <h1>FAQ's</h1>
          <h1> Help</h1>
          <h1>About Me</h1>
        </div>

        {/* <div>
          <AiOutlineMenu size={20} />
        </div> */}

        {/* <div className="fixed  right-0 top-0">
          <ul className="pt-24">
            <li className="p-4">Courses</li>
            <li className="p-4"> Testimonials</li>
            <li className="p-4">FAQ's </li>
            <li className="p-4"> Help</li>
            <li className="p-4">About Me </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
