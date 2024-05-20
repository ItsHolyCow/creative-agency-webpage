import icon6 from '../assets/icon_6.png';
import icon5 from '../assets/icon_5.png';
import icon4 from '../assets/icon_4.png';


const Page2 = () => {
  return (
    <div className="flex h-screen bg-white sm:h-[60vh] max-w-full 2xl:h-screen ">
        <div className="h-full bg-no-repeat max-sm:hidden w-[30vw] sm:w-[40vw] xl:w-[50vw]">
            <div className="flex flex-col  pl-60 sm:pl-4 sm:pr-2 md:pl-16 lg:pd-32 xl:pl-32 2xl:pt-44">
                <h1 className="flex pt-60 justify-between text-5xl font-bold text-slate-600 pb-10 sm:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl">WHAT MAKES US<br/>AWESOME?</h1>
                <button className="bg-gray-800 hover:bg-gray-600 text-sm sm:text-xs sm:rounded-lg lg:text-normal 2xl:text-xl xl:text-lg text-white font-medium py-3 px-6 self-start">CLICK HERE</button>
            </div>
        </div>
        <div className="flex md:flex-row sm:flex-col justify-center w-[70vw]s bg-orange-500 max-sm:w-full sm:w-full max-h-96 mt-[8vh] xl:mt-[5vh] xl:max-h-72 sm:pl-20 md:pl-10 2xl:max-h-96">
            <div className='flex flex-col max-sm:ml-0 ml-32 mt-40 max-w-72 sm:mt-2 sm:ml-10 md:mt-36 md:mr-10 xl:mt-28 2xl:mt-28'>
                <img className='bg-white p-3 rounded-2xl sm:h-14 sm:w-14 md:h-20 md:w-20 2xl:h-28 2xl:w-28' src={icon6} alt='flag' height="70" width="70"/>
                <p className='justify-start text-white font-semibold text-3xl pt-8 sm:text-base sm:pt-2 2xl:mt-10 2xl:text-3xl'>We are<br/>Creative</p>
                <p className='justify-start text-black font-medium text-xl pt-20 xl:pt-10 max-w-72 xl:max-w-56 xl:text-sm 2xl:pt-32 2xl:text-lg max-sm:hidden sm:hidden 2xl:block'>Corporis saepe sed, blanditiis fugit repellat commodi fuga nesciunt quas dignissimos suscipit reprehenderit ea maxime minima aperiam explicabo rem porromolestiae autem.</p>
            </div>
            <div className='flex flex-col ml-16 mt-40 max-w-72 sm:mt-2 sm:ml-10 md:mt-36 md:mr-10 xl:mt-28 2xl:mt-28'>
                <img className='bg-white p-3 rounded-2xl sm:h-14 sm:w-14 md:h-20 md:w-20 2xl:h-28 2xl:w-28' src={icon5} alt='flag' height="70" width="70"/>
                <p className='justify-start text-white font-semibold text-3xl pt-8 sm:text-base sm:pt-2 2xl:mt-10 2xl:text-3xl'>We are<br/>Better</p>
                <p className='justify-start text-black font-medium text-xl pt-20 xl:pt-10 max-w-72 xl:max-w-56 xl:text-sm 2xl:pt-32 2xl:text-lg max-sm:hidden sm:hidden 2xl:block'>Corporis saepe sed, blanditiis fugit repellat commodi fuga nesciunt quas dignissimos suscipit reprehenderit ea maxime minima aperiam explicabo rem porromolestiae autem.</p>
            </div>
            <div className='flex flex-col ml-16 mt-40 max-w-72 sm:mt-2 sm:ml-10 md:mt-36 md:mr-10 xl:mt-28 2xl:mt-28'>
                <img className='bg-white p-3 rounded-2xl sm:h-14 sm:w-14 md:h-20 md:w-20 2xl:h-28 2xl:w-28' src={icon4} alt='flag' height="70" width="70"/>
                <p className='justify-start text-white font-semibold text-3xl pt-8 sm:text-base sm:pt-2 2xl:mt-10 2xl:text-3xl'>We are<br/>Best</p>
                <p className='justify-start text-black font-medium text-xl pt-20 xl:pt-10 max-w-72 xl:max-w-56 xl:text-sm 2xl:pt-32 2xl:text-lg max-sm:hidden sm:hidden 2xl:block'>Corporis saepe sed, blanditiis fugit repellat commodi fuga nesciunt quas dignissimos suscipit reprehenderit ea maxime minima aperiam explicabo rem porromolestiae autem.</p>
            </div>
        </div>
    </div>
  )
}

export default Page2