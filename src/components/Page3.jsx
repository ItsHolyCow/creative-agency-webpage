import ipad from '../assets/ipad.png';

export default function Page3() {
  return (
    <>
      <div className=" h-[80vh] bg-white text-white flex max-w-full sm:bg-gray-800 sm:h-[70vh] max-sm:bg-gray-800">
        <div className="bg-gray-800 h-[65vh] w-[60vw] p-[4rem] pl-[6rem] flex flex-col sm:p-5 sm:pl-10 sm:w-[420px] md:w-2/3 md:h-[80vh] md:p-[5rem] 2xl:w-2/3 lg:pl-16  lg:w-4/5 lg:p-[6rem] xl:p-[8rem] 2xl:p-[10rem]">
          <div className="mb-10 ml-5 sm:ml-0">
          <h1 className="text-left text-5xl font-semibold">WE ARE<br/>CREATIVE AGENCY</h1>
          </div>
          <div className="grid grid-cols-2 ml-5 mb-10 gap-5 max-sm:gap-x-72 sm:gap-1 sm:ml-0 sm:w-[50vw]">
            <div className="w-[15vw] h-[20vh] leading-2 sm:w-[20vh] md:w-[30vh] 2xl:text-lg">
              <h1>LOREM IPSUM SIT</h1>
              <p className='sm:text-xs sm:w-[20vw] md:w-[24vw] xl:text-base 2xl:w-[20vw] max-sm:hidden xl:block'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus voluptas deserunt optio aliquam. 
                A excepturi repellendus tempore quidem dignissimos nulla nobis non aliquam</p>
            </div>
            <div className="w-[15vw] h-[20vh] leading-2 sm:w-[20vh] md:w-[30vh] 2xl:text-lg">
              <h1>LOREM IPSUM SIT</h1>
              <p className='sm:text-xs sm:w-[20vw] md:w-[24vw] xl:text-base 2xl:w-[20vw] max-sm:hidden xl:block'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus voluptas deserunt optio aliquam. 
                A excepturi repellendus tempore quidem dignissimos nulla nobis non aliquam  </p>
            </div>
            <div className="w-[15vw] h-[20vh] leading-2 sm:w-[20vh] md:w-[30vh] 2xl:text-lg">
              <h1>LOREM IPSUM SIT</h1>
              <p className='sm:text-xs sm:w-[20vw] md:w-[24vw] xl:text-base 2xl:w-[20vw] max-sm:hidden xl:block'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus voluptas deserunt optio aliquam. 
                A excepturi repellendus tempore quidem dignissimos nulla nobis non aliquam </p>
            </div>
            <div className="w-[15vw] h-[20vh] leading-2 sm:w-[20vh] md:w-[30vh] 2xl:text-lg">
              <h1>LOREM IPSUM SIT</h1>
              <p className='sm:text-xs sm:w-[20vw] md:w-[24vw] xl:text-base 2xl:w-[20vw] max-sm:hidden xl:block'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus voluptas deserunt optio aliquam. 
                A excepturi repellendus tempore quidem dignissimos nulla nobis non aliquam.</p>
            </div>
          </div>
        </div>
        <div className='xl:ml-[-150px] xl:mt-20 max-sm:hidden sm:block sm:mt-20 xl:block 2xl:mt-36'>
          <img src={ipad} alt="ipad" height="400" width="400" />
        </div>
      </div>
    </>
  )
}