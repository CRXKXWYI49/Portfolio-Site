import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const scrollTo = (id) => {
  const element = document.getElementById(id);
  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};


const Navbar = ({navLinks}) => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
    

  return (
    <header className='flex bg-white h-[80px] absolute justify-center w-full top-0 z-10'>

    <nav className='flex justify-between w-full items-center'>
      <a href='/'>
        <h3 className='text-2xl px-10 font-poppins font-bold'>Trevin Lee.</h3>
      </a>
      <button className='mr-5 text-xl lg:hidden'
              onClick={handleNav}
              aria-label="Toggle navigation">
        <AiOutlineMenu/>
      </button>
      <ul className='flex gap-10 px-10 max-lg:hidden'>
        {navLinks.map((item) => (
          <li key={item.label}
              className='hover:scale-[1.05]'>
            <button onClick={()=> scrollTo(item.href)}
                className='leading-normal font-poppins font-semibold text-lg align-middle'>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>

    <div className={!nav ? 'hidden' :'fixed h-screen w-screen bg-white z-9999 lg:hidden'}>
      <div className='flex h-[80px] justify-end items-center'> 
        <button className='mr-5 text-xl'
                onClick={handleNav}>
            <AiOutlineClose/>
        </button>
      </div>
      <div className='flex flex-col justify-center items-center h-screen mt-[-80px]'>
          {navLinks.map((item) => (
            <ul key={item.label}
                className='hover:scale-[1.05] p-10'>
              <button href={item.href}
                 onClick={()=> {scrollTo(item.href); handleNav();}}
                 className='leading-normal font-poppins font-semibold text-3xl align-middle'>
                {item.label}
              </button>
            </ul>
          ))}
      </div>
    </div>

    </header>
  )
};

export default Navbar;