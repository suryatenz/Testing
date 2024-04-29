import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaSignOutAlt, FaSearch, FaColumns, FaBook, FaMoneyBillAlt, FaClipboard, FaQuestionCircle, FaCommentDots, FaArrowLeft, FaArrowRight, FaLessThan, FaGreaterThan } from "react-icons/fa";
import logo from "./logo.png";
import logo1 from "./logo1.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  const toggleit = () => {
    setToggle(!toggle);
  };

  return (
    <>
      {toggle ? (
        <StandardNavbar toggleit={toggleit} />
      ) : (
        <NavbarWithoutText toggleit={toggleit} />
      )}
    </>
  );
};

const StandardNavbar = ({ toggleit }) => {
  return (
    <nav className="flex flex-col bg-black text-white w-40 md:w-60 lg:w-72 h-screen">
      <div className="p-4">
        <img src={logo} alt="Logo" className="w-28" />
      </div>
      <ul className="flex flex-col flex-grow pt-3">
        <NavItems to="/" icon={<FaSearch />} text="Product Search" />
        <NavItems to="/home" icon={<FaColumns />} text="Dashboard" />
        <NavItems to="/home" icon={<FaBook />} text="Resources" />
        <NavItems to="/products" icon={<FaEnvelope />} text="Affiliated Programs" />
        <NavItems to="/home" icon={<FaMoneyBillAlt />} text="Earnings" />
        <NavItems to="/home" icon={<FaClipboard />} text="Guidelines" />
        <NavItems to="/home" icon={<FaQuestionCircle />} text="Help Center/FAQs" />
      </ul>
      <div className="flex flex-col mt-10 mb-2">
        <li className="flex py-5 ml-5 text-xl">
          <Link className="flex items-center group" onClick={toggleit}>
            {React.cloneElement(<FaLessThan />, {
              className: "text-white mr-2 group-hover:text-orange-400",
            })}
          </Link>
        </li>
        <NavItems to="/" icon={<FaSignOutAlt />} text="Logout" />
        <NavItems to="/" icon={<FaCommentDots />} text="Give Feedback" />
        <NavItems to="/" icon={<FaUser />} text="Refer to Engineer" />
      </div>
    </nav>
  );
};

const NavbarWithoutText = ({ toggleit }) => {
  return (
    <nav className="flex flex-col bg-black text-white w-40 md:w-60 lg:w-72 h-screen">
      <div className="p-4">
        <img src={logo1} alt="Logo" className=" w-10" />
      </div>
      <ul className="flex flex-col flex-grow pt-3">
        <NavItem to="/" icon={<FaSearch />} />
        <NavItem to="/home" icon={<FaColumns />} />
        <NavItem to="/home" icon={<FaBook />} />
        <NavItem to="/products" icon={<FaEnvelope />} />
        <NavItem to="/home" icon={<FaMoneyBillAlt />} />
        <NavItem to="/home" icon={<FaClipboard />} />
        <NavItem to="/home" icon={<FaQuestionCircle />} />
      </ul>
      <div className="flex flex-col mt-10 pb-3 mb-4">
        <li className="flex py-3 ml-7 text-xl">
          <Link className="flex items-center group" onClick={toggleit}>
            {React.cloneElement(<FaGreaterThan />, {
              className: "text-white mr-2 group-hover:text-orange-400",
            })}
          </Link>
        </li>
        <NavItem to="/" icon={<FaSignOutAlt />} />
        <NavItem to="/" icon={<FaCommentDots />} />
        <NavItem to="/" icon={<FaUser />} />
      </div>
    </nav>
  );
};

const NavItem = ({ to, icon }) => {
  return (
    <li className="flex py-5 pl-4 ml-3 text-sm">
      <Link to={to} className="flex items-center group">
        {React.cloneElement(icon, {
          className: "text-white mr-2 group-hover:text-orange-400",
        })}
      </Link>
    </li>
  );
};

const NavItems = ({ to, icon, text }) => {
  return (
    <li className="flex py-2 md:py-4 pl-4 text-sm">
      <Link to={to} className="flex items-center group">
        {React.cloneElement(icon, { className: "text-white mr-2 group-hover:text-orange-400" })}
        <span className="text-white group-hover:text-orange-400">{text}</span>
      </Link>
    </li>
  );
};

export default Navbar;
