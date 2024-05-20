import img1 from '../assets/rectangle_2.jpg'
import img2 from '../assets/rectangle_2_copy.jpg'
import img3 from '../assets/rectangle_2_copy_2.jpg'
import img4 from '../assets/rectangle_2_copy_2_2.jpg'

const Page6 = () => {
  return (
    <div className="bg-white flex h-[80vh] max-w-full]">
        <div className="bg-white max-sm:hidden p-28 w-1/2 h-[100vh] text-black flex sm:w-[0vw] sm:p-0 md:w-[0vw] xl:w-1/2">
        <div className='ml-48 mb-10 flex flex-col sm:hidden xl:block xl:mt-20 2xl:ml-72'>
            <div className="grid w-[24vw] grid-rows-2  grid-cols-2 mb-10 gap-y-10 gap-x-40">
                <div className="w-[14vw] h-[10vh] flex flex-col m-5 mt-[-12px]">
                    <img src={img1} alt='img1' height="100" width="400"/>
                    <h1 className='mt-5 text-lg font-semibold'>Lorem ipsum dolor sit</h1>
                    <p className='flex mt-5 font-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Deleniti, similique.</p>
                </div>
                <div className="w-[14vw] h-[10vh] flex flex-col m-5 mt-[-12px]">
                    <img src={img2} alt='img1' height="100" width="400"/>
                    <h1 className='mt-5 text-lg font-semibold'>Lorem ipsum dolor sit</h1>
                    <p className='flex mt-5 font-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Deleniti, similique.</p>
                </div>
            </div>
            <div className="grid w-[24vw] grid-rows-2 grid-cols-2 mb-8 gap-y-10 gap-x-40">
                <div className="w-[14vw] h-[10vh] flex flex-col m-5">
                    <img src={img4} alt='img1' height="100" width="400"/>
                    <h1 className='mt-5 text-lg font-semibold'>Lorem ipsum dolor sit</h1>
                    <p className='flex mt-5 font-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Deleniti, similique.</p>
                </div>
                <div className="w-[14vw] h-[10vh] flex flex-col m-5">
                    <img src={img3} alt='img1' height="100" width="400"/>
                    <h1 className='mt-5 text-lg font-semibold'>Lorem ipsum dolor sit</h1>
                    <p className='flex mt-5 font-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> Deleniti, similique.</p>
                </div>
            </div>  
        </div>
        </div>
        <div className='flex bg-orange-500 text-white w-1/2 h-[80vh] max-sm:w-full sm:w-full md:w-full lg:w-full xl:w-1/2 2xl:w-1/2'>
            <div className='flex flex-col justify-start max-sm:px-10 max-sm:py-24 max-w-1/2 sm:p-20 sm:max-w-96 md:p-20 md:pl-32 lg:pl-44 xl:pl-20 2xl:pt-32'>
                <h1 className='font-bold text-5xl sm:text-7xl'>WE ARE<br/>CREATIVE<br/>AGENCY</h1>
                <p className='mt-10 font-semibold text-lg sm:text-xl'>Lorem ipsum dolor sit.</p>
                <p className='mt-5 font-thin text-lg text-left sm:text-base md:mb-20 lg:mb-10 xl:text-base '>Quis, corrupti voluptatem totam recusandae accusantium a illum nam perspiciatis provident maiores optio, autem laudantium dolorum ducimus aliquam quia. Odio facere aliquid</p>
                <button className="bg-gray-800 hover:bg-gray-600 mt-5 text-base text-white font-semibold py-3 px-6 self-start sm:text-lg sm:rounded-lg xl:text-base 2xl:text-lg">CLICK HERE</button>
            </div>
        </div>
    </div>
  )
}

export default Page6
