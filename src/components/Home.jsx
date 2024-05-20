//THE MAIN PAGE

const Home = () => {
    return (
        <div className='bg h-[90vh] max-w-full max-sm:w-full'>
            <div className="flex flex-col pr-96 max-sm:pr-80 items-end sm:pl-72 p-10 justify-center text-9xl max-sm:text-5xl max-sm:w-full font-bold text-white h-full sm:text-5xl md:text-7xl xl:text-8xl xl:pr-28 2xl:pr-64">
                <div className='flex flex-col gap-10 w-min sm:gap-5'>
                    <h1>WE ARE<br/>CREATING<br/>AGENCY</h1>  
                    <p className='w-full text-base sm:text-xs md:text-base font-light self-start'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur ratione aut id quis saepe 
                    vitae animi soluta, velit tempore nostrum libero voluptate reprehenderit deleniti esse tenetur nihil eveniet unde ex.</p>
                    <button className='bg-orange-500 hover:bg-orange-300 text-2xl rounded-lg font-medium py-3 px-6 w-fit sm:text-base sm:font-normal md:text-lg'>CLICK HERE</button>
                </div>
            </div>
        </div>
    )
}

export default Home