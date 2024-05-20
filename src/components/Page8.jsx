import icon from '../assets/icon.png'
import icon2 from '../assets/icon_2.png'
import icon3 from '../assets/icon_3.png'
import icon7 from '../assets/icon_7.png'
import icon8 from '../assets/icon_8.png'
import icon9 from '../assets/icon_9.png'

const Page8 = () => {
    return (
        <div className="flex h-[50vh] bg-black max-w-full">
            <div className="flex h-full max-sm:hidden bg-white text-black sm:p-10 p-28 pl-60 sm:w-1/2 lg:w-[50vw] lg:pl-20 lg:p-14 xl:w-1/2 2xl:pr-0 2xl:pl-44">
                <div className="flex flex-col sm:p-0 sm:m-0 p-5 pt-0 mb-20 ml-10 2xl:p-12 2xl:pt-10">
                    <h1 className="flex text-xl sm:text-lg font-semibold">LOREM IPSUM DOLOR SIT AMET</h1>
                    <div className='flex mt-5'>
                        <div className='' >
                            <img className='sm:hidden xl:block' src={icon7} alt='' height="50" width="50" />
                        </div>
                        <div className='flex flex-col ml-10 mb-3'>
                            <h1 className='font-semibold text-base'>EMAIL</h1>
                            <p className='font-thin text-xs'>free@psdfreebies.com</p>
                        </div>
                    </div>
                    <div className='flex mt-5'>
                        <div className='' >
                            <img className='sm:hidden xl:block' src={icon9} alt='' height="50" width="50" />
                        </div>
                        <div className='flex flex-col ml-10 mb-3'>
                            <h1 className='font-semibold text-base'>ADDRESS</h1>
                            <p className='font-thin text-xs'>123, Main Road, New City</p>
                            <p className='font-thin text-xs'>My Country 123456</p>
                        </div>
                    </div>
                    <div className='flex mt-5'>
                        <div className="">
                            <img className='sm:hidden xl:block' src={icon8} alt='sm:hidden xl:block' height="50" width="50" />
                        </div>
                        <div className='flex flex-col ml-10 mb-3'>
                            <h1 className='font-semibold text-base'>CALL US!</h1>
                            <p className='font-thin text-xs'>+123 456 789</p>
                            <p className='font-thin text-xs'>+123 456 789</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex bg-white max-sm:w-full w-[50vw] h-full sm:w-[420px] md:w-[772px] lg:w-[612px] xl:w-1/2'>
                <div className='p-20 pr-0 flex flex-col md:pl-64 lg:pl-28 xl:pl-20 2xl:pt-20'>
                    <h1 className='text-lg font-bold mb-10 2xl:text-2xl'>SAY HELLO !</h1>
                    <h2 className='text-sm mb-5 text-gray-500 2xl:text-base'>Name</h2>
                    <h2 className='text-sm mb-5 text-gray-500 2xl:text-base'>Email</h2>
                    <h2 className='text-sm mb-5 text-gray-500 2xl:text-base'>Phone</h2>
                    <h2 className='text-sm mb-5 text-gray-500 2xl:text-base'>Message</h2>
                </div>
                <div className='pt-32 pl-0'>
                    <div className="max-w-sm space-y-3">
                    <div className="relative">
                        <input type="email" id="hs-floating-underline-input-email" className="peer py-2 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none
                        focus:pt-0
                        focus:pb-0
                        [&:not(:placeholder-shown)]:pt-0
                        [&:not(:placeholder-shown)]:pb-0
                        autofill:pt-0
                        autofill:pb-0" placeholder="you@email.com"/>
                        <label for="hs-floating-underline-input-email" className="absolute top-0 start-0 py-2 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:scale-90
                        peer-[:not(:placeholder-shown)]:translate-x-0.5
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"></label>
                    </div>
                    <div className="relative">
                        <input type="text" id="hs-floating-underline-input-password" className="peer py-1 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none
                        focus:pt-0
                        focus:pb-0
                        [&:not(:placeholder-shown)]:pt-0
                        [&:not(:placeholder-shown)]:pb-0
                        autofill:pt-0
                        autofill:pb-0" placeholder="********"/>
                        <label for="hs-floating-underline-input-passowrd" className="absolute top-0 start-0 py-1 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:scale-90
                        peer-[:not(:placeholder-shown)]:translate-x-0.5
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"></label>
                    </div>
                    <div className="relative">
                        <input type="email" id="hs-floating-underline-input-email" className="peer py-1 px-0 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none
                        focus:pt-0
                        focus:pb-0
                        [&:not(:placeholder-shown)]:pt-0
                        [&:not(:placeholder-shown)]:pb-0
                        autofill:pt-0
                        autofill:pb-0" placeholder="you@email.com"/>
                        <label for="hs-floating-underline-input-email" className="absolute top-0 start-0 py-1 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:scale-90
                        peer-[:not(:placeholder-shown)]:translate-x-0.5
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"></label>
                    </div>
                    <div className="relative">
                        <input type="text" id="hs-floating-underline-input-password" className="peer px-0 py-2 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm placeholder:text-transparent focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none
                        focus:pt-0
                        focus:pb-0
                        [&:not(:placeholder-shown)]:pt-0
                        [&:not(:placeholder-shown)]:pb-0
                        autofill:pt-0
                        autofill:pb-0" placeholder="********"/>
                        <label for="hs-floating-underline-input-passowrd" className="absolute top-0 start-0 py-2 px-0 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent  origin-[0_0] peer-disabled:opacity-50 peer-disabled:pointer-events-none
                        peer-focus:scale-90
                        peer-focus:translate-x-0.5
                        peer-focus:-translate-y-1.5
                        peer-focus:text-gray-500
                        peer-[:not(:placeholder-shown)]:scale-90
                        peer-[:not(:placeholder-shown)]:translate-x-0.5
                        peer-[:not(:placeholder-shown)]:-translate-y-1.5
                        peer-[:not(:placeholder-shown)]:text-gray-500"></label>
                    </div>
                    </div>
                </div>
            </div>
        </div>    
    )
}

export default Page8

