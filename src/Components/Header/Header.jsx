import React, { useState } from 'react'
import style from './Header.module.css'
import logoIn from '../../../public/linkedin-svgrepo-com.svg'
import searchLogo from '../../../public/search-icon.svg'
import { Link } from 'react-router-dom'
import userImg from '../../../public/user.svg'
import downLogo from '../../../public/down-icon.svg'
import worksLogo from '../../../public/nav-work.svg'

export const Header = props => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const [activeItem, setActiveItem] = useState('home')
  const handleActive = item => {
    setActiveItem(item)
  }

  return (
    <>
      <section>
        <nav className='flex md:flex-row flex-col justify-between items-center border-b-2'>
          <div className='left flex justify-center items-center gap-12'>
            <a href=''>
              <img
                src={logoIn}
                alt='logoIn'
                className={`${style.logoIn} mr-12`}
              />
            </a>

            <search className='flex bg-[#f2f2f2] ml-12 px-3 py-2 rounded-md'>
              <img src={searchLogo} alt='' className='mx-1' />
              <input
                type='text'
                placeholder='Search'
                className='bg-transparent border-none outline-none'
              />
            </search>
          </div>

          {/* Hamburger Menu Button - Only visible on mobile */}
          <button
            className='md:hidden top-4 right-4 z-50 fixed p-2'
            onClick={toggleNav}
          >
            <div
              className={`w-6 h-0.5 bg-gray-800 mb-1.5 transition-all ${
                isNavOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-800 mb-1.5 ${
                isNavOpen ? 'opacity-0' : ''
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-800 transition-all ${
                isNavOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></div>
          </button>

          {/* Desktop Navigation */}
          <div className='hidden md:block right'>
            <ul className='flex justify-center items-center gap-8 mx-4'>
              <NavigationLinks
                signOut={props.signOut}
                activeItem={activeItem}
                handleActive={handleActive}
              />
            </ul>
          </div>

          {/* Mobile Navigation Drawer */}
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out md:hidden ${
              isNavOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className='pt-16'>
              <ul className='flex flex-col gap-6 p-4'>
                <NavigationLinks
                  signOut={props.signOut}
                  activeItem={activeItem}
                  handleActive={handleActive}
                />
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  )
}

const NavigationLinks = ({ signOut, activeItem, handleActive }) => (
  <>
    <Link
      to=''
      onClick={() => handleActive('home')}
      className={`flex flex-col items-center text-[#00000099] ${
        activeItem === 'home'
          ? 'border-b-2 border-[#00000099] text-black font-semibold'
          : ''
      }`}
    >
      <i className='fa-solid fa-house'></i>
      <p>Home</p>
    </Link>

    <Link
      to=''
      onClick={() => handleActive('networks')}
      className={`flex flex-col items-center text-[#00000099] ${
        activeItem === 'networks'
          ? 'border-b-2 border-[#00000099] text-black font-semibold'
          : ''
      }`}
    >
      <i className='fa-solid fa-network-wired'></i>
      <p>My Networks</p>
    </Link>

    <Link
      to=''
      onClick={() => handleActive('jobs')}
      className={`flex flex-col items-center text-[#00000099] ${
        activeItem === 'jobs'
          ? 'border-b-2 border-[#00000099] text-black font-semibold'
          : ''
      }`}
    >
      <i className='fa-solid fa-bag-shopping'></i>
      <p>Jobs</p>
    </Link>

    <Link
      to=''
      onClick={() => handleActive('messaging')}
      className={`flex flex-col items-center text-[#00000099] ${
        activeItem === 'messaging'
          ? 'border-b-2 border-[#00000099] text-black font-semibold'
          : ''
      }`}
    >
      <i className='fa-solid fa-message'></i>
      <p>Messaging</p>
    </Link>

    <Link
      to=''
      onClick={() => handleActive('notifications')}
      className={`flex flex-col items-center text-[#00000099] ${
        activeItem === 'notifications'
          ? 'border-b-2 border-[#00000099] text-black font-semibold'
          : ''
      }`}
    >
      <i className='fa-solid fa-bell'></i>
      <p>Notifications</p>
    </Link>

    <Link className='group relative flex flex-col items-center text-[#00000099]'>
      <img
        src={userImg}
        alt='userImg'
        className={`${style.userImg} w-[40px] h-[40px] object-cover rounded-[50%]`}
      />
      <span className='flex items-center'>
        Me
        <img src={downLogo} alt='downLogo' className={style.downLogo} />
      </span>
      <span
        className={`flex flex-col items-center text-[#00000099] ${style.signOut} group-hover:flex bg-white`}
      >
        <a href='' onClick={signOut}>
          Sign Out
        </a>
      </span>
    </Link>

    <div className='flex flex-col items-center text-[#00000099]'>
      <img src={worksLogo} alt='worksLogo' />
      <span className='flex items-center'>
        Works
        <img src={downLogo} alt='downLogo' />
      </span>
    </div>
  </>
)
