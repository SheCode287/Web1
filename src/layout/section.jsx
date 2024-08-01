

function Section() {
  return (
    <div className="cont-ctr bg-custom-light contain-content w-screen h-[420px] px-10 py-4 flex flex-col items-center justify-center gap-4">
      <div className=" px-10 py-4 flex flex-col  justify-center gap-7">
        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold  text-custom-black font-poppins'>Job <span className="text-custom-red">Experience</span></h1>
        <p className="text-sm align-center sm:text-base md:text-lg lg:text-xl text-left text-custom-black ">Lorem ipsum dolor sit amet consectetur. Sem at nullam aliquam quam rhoncus amet at lobortis nec. Morbi ut tincidunt eu tempus amet at sit. <br /> Bibendum tortor vitae convallis diam pellentesque eu est mattis. Vestibulum sit habitant non vitae.</p>
        <p className="text-sm align-center sm:text-base md:text-lg lg:text-xl text-left text-custom-black">Lorem ipsum dolor sit amet consectetur. Sem at nullam aliquam quam rhoncus amet at lobortis nec. Morbi ut tincidunt eu tempus amet at sit. <br /> Bibendum tortor vitae convallis diam pellentesque eu est mattis. Vestibulum sit habitant non vitae.</p>
        <button className='font-[Poppins] font-[600] text-[14px] leading-[21px] align-[center] bg-custom-red h-[45px] w-[200px] rounded-[24px] gap-[10px] border border-custom-red hover:bg-custom-red text-custom-light hover:text-custom-black focus:bg-custom-red focus:text-custom-light active:bg-custom-red active:text-custom-light py-3 px-6'>See More</button>
      </div>
    </div>
  )
}

export default Section
