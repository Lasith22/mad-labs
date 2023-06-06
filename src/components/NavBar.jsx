import { useState } from 'react';
import MainLogo from '../icons/Group 1000000820.svg';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-scroll';
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="bg-white shadow-lg text-[#111827] text-[14px] font-semibold font-inter mt-5">
      <div className="   px-8 py-2 flex items-center  justify-between    ">
        <div className="flex items-start   ">
          <img src={MainLogo} alt="" className="h-8  " />
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
        <ul className="hidden md:flex items-center space-x-4   gap-10      justify-center flex-1">
          <li>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Courses
            </Link>
          </li>
          <li>
            <Link to="testimonials" smooth={true} duration={500}>
              Testimonials
            </Link>
          </li>
          <li>
            {' '}
            <Link to="faqs" smooth={true} duration={500}>
              FAQ,s
            </Link>
          </li>
          <li>
            {' '}
            <Link to="help" smooth={true} duration={500}>
              Help
            </Link>
          </li>
          <li>
            {' '}
            <Link to="about" smooth={true} duration={500}>
              About Me
            </Link>
          </li>
        </ul>
      </div>
      {showMenu && (
        <div className="md:hidden bg-white mt-20 text-[18px] ">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <Link to="home" smooth={true} duration={500}>
                Courses
              </Link>
            </li>
            <li>
              <Link to="testimonials" smooth={true} duration={500}>
                Testimonials
              </Link>
            </li>
            <li>
              {' '}
              <Link to="faqs" smooth={true} duration={500}>
                FAQ,s
              </Link>
            </li>
            <li>
              {' '}
              <Link to="help" smooth={true} duration={500}>
                Help
              </Link>
            </li>
            <li>
              {' '}
              <Link to="about" smooth={true} duration={500}>
                About Me
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
