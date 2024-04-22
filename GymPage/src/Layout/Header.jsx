import React, { useState, useEffect } from 'react';
import MobileNav from './NavBar';
import { AnimatePresence } from 'framer-motion';
import { motion } from "framer-motion"
import HeaderContent from './HeaderContent';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);


  const toggleOpen = () => {
    setOpen((prevValue) => !prevValue);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className='flex justify-center w-screen lg:absolute lg:flex-col bg-opacity-0 z-50 bg-white top-0 items-center'>
        <AnimatePresence>
          {scrollPosition >= 70 && <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.3 }} className='w-screen bg-white fixed top-0 lg:flex hidden'><HeaderContent isOpen={isOpen} setOpen={setOpen} dark={true}/></motion.div>}
        </AnimatePresence>
        {scrollPosition < 70 && (
          <>
            <HeaderContent isOpen={isOpen} setOpen={setOpen} dark={false} />
          </>)}
        <AnimatePresence>
          {isOpen && <MobileNav toggleIsOpen={toggleOpen} />}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Header;
