// import React from "react";
// import { Link } from "react-router-dom";
// import { FaHome, FaUser, FaEnvelope, FaCog, FaSignOutAlt } from "react-icons/fa";
// import logo from "./logo.png";

// const Navbar = () => {
//   return (
//     <nav className="flex flex-col bg-black text-white w-40 h-screen"> 
//       <div className="p-4">
//         <img src={logo} alt="Logo" className="w-full" />
//       </div>
//       <ul className="flex flex-col">
//         <NavItem to="/" icon={<FaHome />} text="Home" />
//         <NavItem to="/home" icon={<FaUser />} text="Profile" />
//         <NavItem to="/home" icon={<FaEnvelope />} text="Messages" />
//         <NavItem to="/home" icon={<FaCog />} text="Settings" />
//         <NavItem to="/home" icon={<FaSignOutAlt />} text="Logout" />
//       </ul>
//     </nav>
//   );
// };
// const NavItem = ({ to, icon, text }) => {
//   return (
//     <li className="flex items-center py-5 px-5 text-xl bg-black hover:bg-orange-400">
//       <Link to={to} className="flex items-center text-white">
//         {icon}
//         <span className="ml-2">{text}</span>
//       </Link>
//     </li>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaEnvelope, FaCog, FaSignOutAlt, FaThumbsUp, FaSearch, FaDashcube, FaColumns, FaPagelines, FaBook, FaStickyNote, FaMoneyBillWave, FaMoneyBillAlt, FaClipboard, FaQuestion, FaQuestionCircle, FaCommentDots } from "react-icons/fa";
import logo from "./logo.png";

const Navbar = () => {
  return (
    <nav className="flex flex-col bg-black text-white w-44 h-screen"> 
      <div className="p-4">
        <img src={logo} alt="Logo" className="w-full" />
      </div>
      <ul className="flex flex-col flex-grow pt-3">
        <NavItem to="/" icon={<FaSearch />} text="Product Search" />
        <NavItem to="/home" icon={<FaColumns />} text="Dashboard" />
        <NavItem to="/home" icon={<FaBook />} text="Resources" />
        <NavItem to="/home" icon={<FaEnvelope />} text="Affiliated Programs" />
        <NavItem to="/home" icon={<FaMoneyBillAlt/>} text="Earnings"/>
        <NavItem to="/home" icon={<FaClipboard/>} text="Guidlines"/>
        <NavItem to="/home" icon={<FaQuestionCircle/>} text="Help Center/FAQs"/>
      </ul>
      <div className="flex flex-col justify-end mt-auto">
        <NavItem to="/" icon={<FaSignOutAlt />} text="Logout" />
        <NavItem to="/" icon={<FaCommentDots/>} text="Give Feedback"/>
        <NavItem to="/" icon={<FaUser/>} text="Refer to Engineer" />
      </div>
    </nav>
  );
};

const NavItem = ({ to, icon, text }) => {
  return (
        <li className="flex items-center py-4 pl-4 text-sm">
          <Link to={to} className="flex items-center group">
            {React.cloneElement(icon, { className: "text-white mr-2 group-hover:text-orange-400" })}
            <span className="text-white group-hover:text-orange-400">{text}</span>
          </Link>
        </li>
      );
    };

export default Navbar;
