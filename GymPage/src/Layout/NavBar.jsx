
import { motion } from "framer-motion";
import { links } from "../constants";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"
const MobileNav = ({ toggleIsOpen }) => {

  const {pathname} = useLocation()

  const mapLinks = links.map((link) => { return (
    <Link to={link.route} className={` px-3 hover:bg-gray-50 bg-opacity-70 transition ${link.route === pathname && "  bg-gray-100  text-emerald-600  "}`}>
    <h1 className="font-[300] py-4  text-[15px]">{link.label}</h1>
    
    </Link>
  )})
  
    return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}} 
      exit={{ opacity: 0 }} 
      className="absolute top-[60px] bg-white  w-full md:hidden"
      transition={{ duration: 0.3 }}
      >
        <div className='flex flex-col w-full   pb-4'>
          {mapLinks}
        </div>
      </motion.div>
    );
  };


export default MobileNav;