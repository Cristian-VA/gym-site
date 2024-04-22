import React from 'react'
import { Link } from 'react-router-dom'
import { links } from '../constants'
import { useLocation } from "react-router-dom"
import { Divide as Hamburger } from 'hamburger-react';
const HeaderContent = ({ isOpen, setOpen, dark }) => {
    const { pathname } = useLocation()
    const mapLinks = links.map((link) => {
        return (
            <Link to={link.route} className={link.route === pathname ? 'h-full w-[110px] lg:w-[120px] flex flex-col text-emerald-600  ' : "h-full lg:w-[150px] w-[110px]  flex flex-col transition hover:text-gray-500  "}>
                <hr className={`  h-[3px]  hover:bg-gray-200 bg-opacity-60 transition  ${link.route === pathname && "  bg-emerald-500  h-[3px] "}`} />
                <h1 className=' my-auto text-center items-center text-[14px]  uppercase tracking-wide'>{link.label}</h1>
            </Link>

        )
    })
    return (
        <div className={`max-w-[1580px] w-full   flex justify-between h-[60px] lg:h-[65px]  md:px-20 lg:px-28  px-6 text-center relative font-medium `}>
            <div className='flex gap-0 lg:gap-10'>
                <Link to={"/"} className={`my-auto text-[24px]  ${dark === true? "text-gray-800": "lg:text-gray-100 text-gray-800"} w-full md:text-left  font-semibold uppercase tracking-tight `}>Vitality <span className='text-gray-500'>|</span>
                    <span className='text-emerald-500'> Hub</span></Link>
                <div className={`lg:flex hidden ${dark === true? "text-gray-800": "text-gray-100"} `}>
                    {mapLinks}
                </div>
            </div>
            <div className='h-full hidden items-center lg:flex '>
                <h1 className={`my-auto  border-2 py-2 px-4 ${dark === true? "text-gray-800": "text-gray-100"} text-[14px] border-emerald-500`}>GET STARTED</h1>
            </div>
            <div className='lg:hidden  absolute top-0 m-2 right-0'>
                <Hamburger toggled={isOpen} toggle={setOpen} color='#6b7280' size={22} />
            </div>

        </div>
    )
}

export default HeaderContent