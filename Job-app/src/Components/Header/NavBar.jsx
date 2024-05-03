import React, { useState } from 'react';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { IoMdCloseCircleOutline,IoMdMenu  } from "react-icons/io";
import logos from '../../assets/logos.png'

const NavBar = () => {
    const [isNav,setIsNav] = useState(false);
    const [activeSection, setActiveSection] = useState('hero'); 

    const sections = ['Hero', 'Services', 'Jobs'];

    const handleNav = () =>{
        setIsNav(!isNav);
    }

      //Method to change the color of the selected link
      const handleNavigateActive = (section) => {
        const homeSection = document.getElementById(section);

        if (homeSection) {
            const position = homeSection.offsetTop;
            scroll.scrollTo(position, {
                smooth: true,
                duration: 500,
                offset: -80,
            });
            // Update active section
            setActiveSection(section);
         
        }
    };

   

  return (
    <header className="bg-white w-full fixed top-0 left-0 text-white shadow-lg flex justify-between lg:justify-around items-center h-14 z-20">
        
    <div className="flex items-center justify-center">
        <h1 className="text-3xl font-bold text-black italic">Less-Ego</h1>
    </div>

    <div className="font-semibold text-sm lg:text-base hidden md:block">
        <ul className="mx-auto flex items-center gap-6 lg:gap-8 text-gray-400 cursor-pointer">
            {sections.map((section) =>(
                <li key={section}>
                    <ScrollLink
                    to={section}
                    smooth={true}
                    duration={500}
                    onClick={() =>handleNavigateActive(section)}>
                        {section}
                    </ScrollLink>

                </li>
            ))
            }
            
        </ul>
    </div>
    
    <div onClick={handleNav} className="block md:hidden text-gray-300 fixed right-10 top-4 z-50">
        {isNav ? <IoMdCloseCircleOutline size={30}/> : <IoMdMenu  size={30}/>}
    </div>

    <div className={isNav ? `text-gray-100 z-40 fixed right-0 top-[56px] w-full bg-red-200 ease-in-out duration-500`
                            : 'fixed right-[-100%]'}>
            <ul className="p-8 text-xl ml-20 z-10 cursor-pointer">
                    {sections.map((section) =>(
                        <li key={section} className="p-2">
                            <ScrollLink
                            to={section}
                            smooth={true}
                            duration={700}
                            onClick={() =>handleNavigateActive(section)}>
                                {section}
                            
                            </ScrollLink>

                        </li>
                    ))
                    }
            </ul>
    </div>

    <button onClick={() => handleNavigateActive("Contact")} className="button-action">Find A Job</button>

   
</header>
  )
}

export default NavBar