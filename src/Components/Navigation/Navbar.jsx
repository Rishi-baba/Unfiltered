import React, { useContext, useRef } from 'react'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'
import { Link } from 'react-router-dom'
import Logo from '../common/Logo'

const Navbar = () => {

    const navGreenRef = useRef(null)
    const loginGreenRef = useRef(null)
    const [navOpen,setNavOpen] = useContext(NavbarContext)
    const [navColor, setNavColor] = useContext(NavbarColorContext)

    return (
        <div className='z-50 fixed top-0 w-full'>
            <div className='flex items-start justify-between'>
                <div className='lg:p-1 p-0.5' style={{marginTop: '-6vh'}}>
                    <div className='lg:w-36 w-24'>
                        <Logo />
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    {/* Navigation Button */}
                    <div onClick={()=>{
                        setNavOpen(true)
                    }} onMouseEnter={() => {
                        navGreenRef.current.style.height = '100%'
                    }}
                        onMouseLeave={() => {
                            navGreenRef.current.style.height = '0%'
                        }}
                        className='lg:h-16 h-10 bg-black relative lg:w-[16vw] w-48 cursor-pointer'>
                        <div ref={navGreenRef} className='bg-[#FF0000] transition-all absolute top-0 h-0 w-full'></div>
                        <div className='relative h-full lg:px-12 px-8 flex flex-col justify-center items-end lg:gap-1.5 gap-0.5'>
                            <div className="lg:w-18 w-12 h-0.5 bg-white"></div>
                            <div className="lg:w-10 w-6 h-0.5 bg-white"></div>
                        </div>
                    </div>
                    
                    {/* Login Button */}
                    <Link to="/login" className='block'>
                        <div onMouseEnter={() => {
                            loginGreenRef.current.style.height = '100%'
                        }}
                            onMouseLeave={() => {
                                loginGreenRef.current.style.height = '0%'
                            }}
                            className='lg:h-12 h-8 bg-black relative lg:w-[16vw] w-48 cursor-pointer'>
                            <div ref={loginGreenRef} className='bg-[#FF0000] transition-all absolute top-0 h-0 w-full'></div>
                            <div className='relative h-full lg:px-12 px-8 flex flex-col justify-center items-center'>
                                <div className="text-white lg:text-sm text-xs font-bold">LOGIN</div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar