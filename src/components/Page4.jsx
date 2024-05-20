import watch from '../assets/apple_watch.png';

const Page4 = () => {
  return (
    <div className='h-screen bg-white sm:h-[60vh] max-w-full'>
        <div className='flex p-36 sm:p-10 bg-white sm:h-[20vh]'></div>
        <div className='relative flex items-center justify-center p-32 max-h-[50vx] bg-orange-400 sm:h-[10vh] sm:p-20 md:p-20 lg:p-24 xl:p-28 2xl:54'>
            <div className='mr-[50vw] text-left mb-20'>
              <p className='text-5xl text-white font-bold justify-end absolute sm:text-base sm:mt-3 md:text-2xl lg:text-4xl xl:mt-1'>WE ARE<br/>CREATIVE</p>
            </div>
            <div className='absolute'>
              <img className='sm:h-72 md:h-60 xl:h-72 2xl:h-96' src={watch} alt='watch'/>
            </div>
        </div>
        <div className='p-36 sm:p-10 max-h-[12vh] bg-white sm:h-[20vh]'></div>
    </div>
  )
}

export default Page4