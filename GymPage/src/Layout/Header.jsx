import React, { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react';
import MobileNav from './NavBar';
import { AnimatePresence, motion } from 'framer-motion';
import { links } from '../constants';
import { Link } from 'react-router-dom';
import {useLocation} from "react-router-dom"
const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const {pathname} = useLocation()
  const toggleOpen = () => {
    setOpen((prevValue) => !prevValue);
  };
  

  const mapLinks = links.map((link) => { return (
    <Link to={link.route} className={link.route === pathname? 'h-full w-[110px]  flex flex-col text-emerald-600  ' : "h-full w-[110px]  flex flex-col transition hover:text-gray-500  "}>
              <hr className={`  h-[3px]  hover:bg-gray-200 bg-opacity-60 transition ${link.route === pathname && "  bg-emerald-500  h-[3px] "}`}/>
                <h1 className=' my-auto text-center items-center text-[15px] font-[300] '>{link.label}</h1>
            </Link>

  )})  

  return (
    <>
      <div className='flex justify-center w-screen flex-col sticky z-50 bg-white top-0  items-center'>
        <div className='max-w-[1440px] w-full  flex justify-between h-[60px] md:h-[65px]  md:px-6  px-3 text-center relative '>
          <Link to={"/"} className='my-auto text-[24px]   w-full md:text-left text-gray-800 font-semibold '>Vitality<span className='text-gray-500 font-thin'>|</span>
          <span className='text-emerald-500'>Hub</span></Link>
          <div className='md:flex hidden'>
            {mapLinks}

          </div>
          <div className='md:hidden  absolute top-0 m-2 right-0'>
          <Hamburger toggled={isOpen} toggle={setOpen} color='#6b7280' size={22} />
          </div>
         
        </div>
        <AnimatePresence>
          {isOpen && <MobileNav toggleIsOpen={toggleOpen} />}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Header;