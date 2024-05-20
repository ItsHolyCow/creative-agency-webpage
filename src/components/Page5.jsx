import phone from '../assets/iphone.png'

const Page5 = () => {
  return (
    <>
    <div className='w-full h-[80vh] text-white bg-gray-800 flex max-w-full'>
        <div className="bg-white max-sm:hidden w-[40vw] h-[80vh] flex flex-col sm:w-0 xl:w-[50vw]">
            <div className='ml-[400px] max-sm:ml-[0px] mt-32 xl:ml-[12rem]'>
                <img className='z-10 absolute max-sm:scale-75 sm:w-0 xl:w-56 2xl:ml-56' src={phone} alt='phone' height="200" width="300"/>
            </div>
        </div>
        <div className="p-32 max-sm:w-full max-sm:max-w-full pl-72 max-sm:pl-20 pr-72 max-w-3/5 w-full max-sm:p-10 max-sm:pt-32 sm:p-20 md:p-20 xl:pl-56">
            <h1 className="text-5xl font-bold">WE ARE<br/>CREATIVE AGENCY</h1>
            <div className='flex w-full items-center justify-center sm:gap-10'>
            <div className="pt-20 sm:max-w-[40vx]  max-sm:max-w-full max-sm:w-full sm:pt-10">
                <p className="font-normal text-lg sm:text-base 2xl:text-xl 2xl:mt-10">LOREM IPSUM DOLOR SIT</p>
                <p className='sm:text-xs sm:leading-6 2xl:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet earum, soluta eveniet porro, molestias perferendis suscipit nemo ad accusantium tempore delectus deleniti! Ad, vero culpa. Perferendis voluptate et qui nulla, vitae laudantium distinctio fugiat expedita iure perspiciatis illum eius saepe!</p>
            </div>
            <div className="pt-20 sm:max-w-[40vx] max-sm:hidden max-sm:w-full  sm:pt-10">
                <p className="font-normal text-lg sm:text-base 2xl:text-xl 2xl:mt-10">LOREM IPSUM DOLOR SIT</p>
                <p className='sm:text-xs sm:leading-6 2xl:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet earum, soluta eveniet porro, molestias perferendis suscipit nemo ad accusantium tempore delectus deleniti! Ad, vero culpa. Perferendis voluptate et qui nulla, vitae laudantium distinctio fugiat expedita iure perspiciatis illum eius saepe!</p>
            </div>
            <div className="pt-20 sm:max-w-[40vx] max-sm:hidden max-sm:w-full sm:pt-10">
                <p className="font-normal text-lg sm:text-base 2xl:text-xl 2xl:mt-10">LOREM IPSUM DOLOR SIT</p>
                <p className='sm:text-xs sm:leading-6 2xl:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet earum, soluta eveniet porro, molestias perferendis suscipit nemo ad accusantium tempore delectus deleniti! Ad, vero culpa. Perferendis voluptate et qui nulla, vitae laudantium distinctio fugiat expedita iure perspiciatis illum eius saepe!</p>
            </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Page5