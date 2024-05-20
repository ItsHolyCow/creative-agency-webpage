const Page1 = () => {
  return (
  <div className="flex h-screen bg-purple-950 max-w-full">
    <div className="bg2 h-full bg-no-repeat max-sm:hidden w-[40vw] sm:w-[0vw] xl:w-[500px] 2xl:w-[100vw]"></div>
    <div className="flex flex-col justify-start w-[60vw] sm:w-[64vw] sm:gap-0 h-full bg-purple-950 gap-5 sm:pl-32 md:w-full 2xl:w-[1800px]">
        <div className="flex flex-col justify-start md:pl-40 lg:pd-32 xl:pl-10">  
          <h1 className="font-bold text-6xl text-white sm:max-w-[50vw] pl-36 pt-36 pb-16 sm:pl-10">WE ARE<br/>CREATING AGENCY</h1>
          <p className="text-lg pl-36 font-semibold text-white sm:max-w-[50vw] sm:pl-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Non necessitatibus<br/>quo alias eum sunt iusto omnis.</p>
          <div className="bg-purple-950 flex flex-col pl-36 pt-20 2xl:pl-10">
            <p className="w-full text-xl text-slate-400 font-semibold pb-20 min-w-500px max-sm:hidden sm:hidden 2xl:block">Ut enimm Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam 
            corporis eum autem<br/>quibusdam sed impedit architecto eveniet quo dolores aut, enim perspiciatis dolor<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore asperiores aut reiciendis,
            <br/> iste eaque rem cumque facere laboriosam a, porro dolores voluptates magnam?<br/>consectetur adipisicing elit. Numquam 
            corporis eum autem</p> 
            <button className="bg-orange-500 text-gray-200 hover:bg-orange-300 text-base sm:rounded-lg xl:text-lg font-medium py-3 px-6 self-start">CLICK HERE</button>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Page1