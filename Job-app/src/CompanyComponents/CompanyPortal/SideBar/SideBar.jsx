import React, { useState } from 'react';
import { FaArrowLeft } from "react-icons/fa"; 
import { SiCodefresh } from "react-icons/si";
import { IoSearchOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const navigate = useNavigate();
    const [isOpen,setIsoOpen] = useState(true);
    const [isSubMenuOpen,setIsSubMenuOpen] = useState(false);

    const Menus = [
        {title:"Dashboard",link:"/portal/dashboard"},
        {title:"Users",link:"/portal/users"},
        {title:"Media",spacing:true},
        {
            title:"Projects",
            submenu:true,
            submenuItems:[
                {title:"submenu 1"},
                {title:"submenu 1"},
                {title:"submenu 1"},
            ]
        },
        {title:"Analytics"},
        {title:"Inbox"},
        {title:"Profile",spacing:true},
        {title:"Settings"},
        {title:"Logout",link:"/auth" ,icon:<RiLogoutCircleLine />},
    ]

    const NavigateTo = (url) =>{
        navigate(url);
    }
  return (
    <div className="flex">
    <div className={`bg-gray-400  h-screen p-5 pt-8 relative ${isOpen ? "w-72":"w-20"} duration-500`}>
        <FaArrowLeft
            onClick={() =>setIsoOpen(!isOpen)}
         className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-9 border border-primary cursor-pointer ${
            !isOpen && 'rotate-180'
        }`}
         />
         <div className="inline-flex">
            <SiCodefresh className={`text-4xl rounded cursor-pointer block float-left mr-2 duration-500 ${isOpen && "rotate-[360deg]"}`}/>
            <h1 className={`text-white origin-left font-medium text-2xl duration-500 ${!isOpen && "scale-0"} `}>Job Finder</h1>
         </div>
         <div className={`flex items-center rounded-md bg-white mt-6 ${!isOpen ? "px-2.5":"px-4"} py-2`}>
            <IoSearchOutline className={`text-gray-400 text-lg block float-left cursor-pointer mr-2 ${isOpen && "mr-2"}`}/>
            <input
            type="text"
            placeholder="Search"
            className={`text-base bg-transparent w-full text-black focus:outline-none ${!isOpen && "hidden"}`}
            />
         </div>

         <ul className="pt-2">
            {Menus.map((menu,index) =>(
               <React.Fragment key={index}>
                <li 
                key={index} 
                onClick={() => NavigateTo(menu.link)}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-200 rounded-md ${menu.spacing ? "mt-9" : "mt-2"} mt-2`}>
                    <span>
                        {menu.icon ? menu.icon :<MdDashboard /> }
                    
                    </span>
                    <span 
                    className={`text-base font-medium flex-1 duration-200 ${!isOpen && "hidden"}`}>
                    {menu.title}
                    </span>
                    {
                        menu.submenu && isOpen && (
                            <IoIosArrowDown className={` ${isSubMenuOpen && "rotate-180"}`} onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}/>
                        )}
                </li>
                {
                    menu.submenu && isSubMenuOpen && isOpen && (
                        <ul>
                            {menu.submenuItems.map((submenuItem,subIndex) => (
                                <li key={subIndex} className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-blue-200 rounded-md">
                                    {submenuItem.title}
                                </li>
                            ))}
                        </ul>
                    )
                }
                </React.Fragment>
            ))}
         </ul>
    </div>
    </div>
  )
}

export default SideBar