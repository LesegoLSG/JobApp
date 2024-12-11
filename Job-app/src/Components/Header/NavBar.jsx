import React, { useContext, useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { IoMdCloseCircleOutline, IoMdMenu } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import TopScroller from "../Reusables/TopScroller";
import ConfirmationModal from "../Reusables/ConfirmationModal";

const NavBar = () => {
  const navigate = useNavigate();
  const [isNav, setIsNav] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [activeSection, setActiveSection] = useState("hero");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const sections = ["Hero", "Services", "Contact"];

  const handleNav = () => {
    setIsNav(!isNav);
  };

  const scrollToSection = (section) => {
    const homeSection = document.getElementById(section);
    if (homeSection) {
      const position = homeSection.offsetTop;
      scroll.scrollTo(position, {
        smooth: true,
        duration: 500,
        offset: -80,
      });
    }
  };

  const handleNavigateActive = (section) => {
    if (location.pathname === "/") {
      scrollToSection(section);
    } else {
      navigate("/", { state: { scrollTo: section } });
    }
    setIsNav(false);
  };

  const handleNavigateToPage = (page) => {
    navigate(page);
    setIsNav(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out user
      setIsModalOpen(false);

      navigate("/"); // Redirect to login page after logout
    } catch (error) {
      console.log("Error logging out:", error);
    }
  };

  return (
    <>
      <header className="bg-white fixed top-0 left-0 right-0 shadow-lg z-20 h-16 flex justify-between items-center px-4 md:px-24">
        {/* <TopScroller /> */}
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-[#3291a8]">
            Code<span className="text-[#24c964]">Connect</span>
          </h1>
        </div>

        {/* Menu items */}
        <nav className="hidden md:flex font-semibold text-sm lg:text-base">
          <ul className="flex items-center gap-6 text-gray-400">
            {sections.map((section) => (
              <li key={section}>
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={500}
                  onClick={() => handleNavigateActive(section)}
                  className={`cursor-pointer`}
                >
                  {section}
                </ScrollLink>
              </li>
            ))}
            <li
              className="cursor-pointer"
              onClick={() => handleNavigateToPage("/jobs-all")}
            >
              Jobs
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleNavigateToPage("/resume/submit")}
            >
              Submit Resume
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div
          onClick={handleNav}
          className="md:hidden flex justify-end items-center text-gray-700 cursor-pointer"
          style={{ marginLeft: "auto" }} // Ensure the icon is aligned to the end
        >
          {isNav ? (
            <IoMdCloseCircleOutline size={30} />
          ) : (
            <IoMdMenu size={30} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-16 right-0 w-full flex justify-center items-center h-auto bg-gray-900 z-40 transition-transform transform ${
            isNav ? "translate-x-0" : "translate-x-full"
          }`}
          style={{ overflowX: "hidden" }} // Prevent overflow from mobile menu
        >
          <ul className="p-8 text-white font-semibold text-xl flex flex-col items-center space-y-4">
            {sections.map((section) => (
              <li key={section}>
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={700}
                  onClick={() => handleNavigateActive(section)}
                >
                  {section}
                </ScrollLink>
              </li>
            ))}
            <li
              className="cursor-pointer"
              onClick={() => handleNavigateToPage("/jobs-all")}
            >
              Jobs
            </li>
            <li
              className="cursor-pointer"
              onClick={() => handleNavigateToPage("/resume/submit")}
            >
              Submit Resume
            </li>
            <li>
              {currentUser ? (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="button-action block md:hidden"
                >
                  Logout
                </button>
              ) : (
                <div className="flex flex-col justify-center items-center gap-y-4 hover:underline ">
                  <p
                    onClick={() => navigate("/auth-signUp")}
                    className="block md:hidden  font-semibold text-xl"
                  >
                    Sign up for free
                  </p>
                  <button
                    onClick={() => navigate("/auth-signIn")}
                    className="button-action block md:hidden"
                  >
                    Login
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>

        {/* Desktop Get Started Button */}
        <div>
          {currentUser ? (
            <button
              onClick={() => setIsModalOpen(true)}
              className="button-action hidden md:block"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/auth-signIn")}
              className="button-action hidden md:block"
            >
              Login
            </button>
          )}
        </div>
      </header>
      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onConfirm={handleLogout}
        onCancel={() => setIsModalOpen(false)} // Close modal without logging out
      />
      {/* Scroll to the top of a section button */}
      <TopScroller />
    </>
  );
};

export default NavBar;
