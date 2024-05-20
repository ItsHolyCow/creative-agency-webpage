import React from 'react';
import Shape_1 from '../assets/shape_1.png';
import Text2 from '../assets/image.png';
import Webpro from '../assets/webpro.png';

const NavMain = ({ refs }) => {
  const { HomeRef, Part1Ref, Part2Ref, Part3Ref, Part4Ref, Part5Ref, Part6Ref, Part7Ref, Part8Ref, FooterRef } = refs;

  const NavItems = [
    { name: "Home", ref: HomeRef }, 
    { name: "About Us", ref: Part1Ref },
    { name: "Blog", ref: Part2Ref }, 
    { name: "Services", ref: Part3Ref }, 
    { name: "Pages", ref: Part5Ref }, 
    { name: "Contact Us", ref: Part8Ref }
  ];

  const handleClick = (item) => {
    item.ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='bg-white fixed h-[10vh] flex items-center justify-center w-full box-border z-50'>
      <nav className='p-10 sm:p-2 w-full flex items-center justify-between md:p-2 lg:p-4'>
        <div className='flex items-center sm:items-start xl:items-center md:ml-10 2xl:ml-0 2xl:pl-20'>
          <div><img className='sm:w-20 sm:pr-2 md:w-72 md:h-20 lg:w-44 lg:pr-0 lg:pt-0 xl:pr-2 xl:w-32 2xl:w-40' src={Shape_1} alt="Logo" /></div>
          <div>
            <img className='sm:w-28 sm:pt-4 md:w-64 md:pt-5 lg:pt-4 md:p-0 xl:pt-2 max-sm:hidden' src={Webpro} alt="Tagline" />
            <p className='font-semibold md:w-40 md:pl-0 xl:pl-2 sm:hidden max-sm:hidden lg:block'>TAGLINE HERE</p>
          </div>
        </div>
        <div className='lg:ml-10 lg:mr-10 2xl:ml-32'>
          <img className='sm:w-0 md:w-64 md:p-1 md:mr-5 lg:w-50 lg:h-8 xl:mr-20 2xl:mr-10 2xl:w-88 max-sm:hidden' src={Text2} alt="Secondary image" />
        </div>
        <div className='w-full sm:pl-32'>
          <ul className='flex gap-x-2 md:pl-5 sm:gap-x-5 lg:pl-10 lg:gap-x-5 xl:gap-x-8 xl:pl-32 2xl:pl-72'>
            {NavItems.map((item, index) => (
              <li
                key={index}
                onClick={() => handleClick(item)}
                role="button"
                tabIndex={0}
                className='font-normal text-xs lg:font-semibold cursor-pointer uppercase hover:underline transition-transform duration-500 sm:font-bold xl:text-base'
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavMain;
