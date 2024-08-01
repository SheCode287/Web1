import Progressbar from "../components/progressbar"

function Skills() {
  return (
    <div className="bg-[#595757] w-full  h-auto px-24 py-20 text-custom-light flex flex-row flex-wrap place-content-around items-center font-poppins max-md:flex-col max-md:gap-8 gap-3 max-md:px-6 max-md:py-12">
      <div className="header flex justify-between w-full mb-4">
        <h1 className=' text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold mx-2 my-3 text-[black] font-poppins'>My <span className="text-custom-red">Skills</span></h1>
        <div className="flex justify-between gap-[4px]">
          <img  src="arrow-left.svg" alt="arrow-icon" />
          <img src="arrow-right.svg" alt="arrow-icon" />
        </div>
      </div>

      <div className="flex flex-col rounded-[14px] w-[254px] h-[210px] bg-custom-light p-4 ">
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl mx-2 my-3 text-[black] font-poppins font-bold">Java Script</h3>
      <p className="text-md sm:text-md md:text-md lg:text-md mx-2 my-2 text-[black] font-poppins font-bold">Proficiency: <span className="text-custom-red font-normal text-sm">Intermediate</span></p>
      <Progressbar 
      one={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-red gap-1'></div> }
      two={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-red gap-1'></div> }
      three={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-black gap-1'></div> }
      four={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-black gap-1'></div> }
      five={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-black gap-1'></div> }
      
      />
      <h4 className="text-md sm:text-md md:text-md lg:text-md mx-2 my-3 text-[black] font-poppins font-bold">Projects: <span className="text-custom-red">5</span></h4>
      </div>

      <div className="flex flex-col rounded-[14px] w-[254px] h-[210px] bg-custom-light p-4 ">
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl mx-2 my-3 text-[black] font-poppins font-bold">HTML</h3>
      <p className="text-md sm:text-md md:text-md lg:text-md mx-2 my-3 text-[black] font-poppins font-bold">Proficiency Level: <span className="text-custom-red font-normal text-sm">Proficent</span></p>
      <Progressbar 
      one={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-red gap-1'></div> }
      two={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-red gap-1'></div> }
      three={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-red gap-1'></div> }
      four={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-red gap-1'></div> }
      five={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-black gap-1'></div> }
      
      />
      <h4 className="text-md sm:text-md md:text-md lg:text-md mx-2 my-3 text-[black] font-poppins font-bold">Projects: <span className="text-custom-red">10</span></h4>
      </div>

      <div className="flex flex-col rounded-[14px] w-[254px] h-[210px] bg-custom-light p-4 ">
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl mx-2 my-3 text-[black] font-poppins font-bold">CSS</h3>
      <p className="text-md sm:text-md md:text-md lg:text-md mx-2 my-3 text-[black] font-poppins font-bold">Proficiency Level: <span className="text-custom-red font-normal text-sm">Proficent</span></p>
      <Progressbar 
      one={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-red gap-1'></div> }
      two={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-red gap-1'></div> }
      three={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-red gap-1'></div> }
      four={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-red gap-1'></div> }
      five={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-black gap-1'></div> }
      
      />
      <h4 className="text-md sm:text-md md:text-md lg:text-md mx-2 my-3 text-[black] font-poppins font-bold">Projects: <span className="text-custom-red">18</span></h4>
      </div>

      <div className="flex flex-col rounded-[14px] w-[254px] h-[210px] bg-custom-light p-4 ">
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl mx-2 my-3 text-[black] font-poppins font-bold">React</h3>
      <p className="text-md sm:text-md md:text-md lg:text-md mx-2 my-3 text-[black] font-poppins font-bold">Proficiency: <span className="text-custom-red font-normal text-sm">Intermediate</span></p>
      <Progressbar 
      one={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-red gap-1'></div> }
      two={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-red gap-1'></div> }
      three={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-black gap-1'></div> }
      four={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-black gap-1'></div> }
      five={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-black gap-1'></div> }
      
      />
      <h4 className="text-md sm:text-md md:text-md lg:text-md mx-2 my-3 text-[black] font-poppins font-bold">Projects: <span className="text-custom-red">7</span></h4>
      </div>

      <div className="flex flex-col rounded-[14px] w-[254px] h-[210px] bg-custom-light p-4 ">
      <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl mx-2 my-3 text-[black] font-poppins font-bold">NextJs</h3>
      <p className="text-md sm:text-md md:text-md lg:text-md mx-2 my-3 text-[black] font-poppins font-bold">Proficiency: <span className="text-custom-red font-normal text-sm">Amatuer</span></p>
      <Progressbar
      one={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-red gap-1'></div> }
      two={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-black gap-1'></div> }
      three={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-black gap-1'></div> }
      four={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-black gap-1'></div> }
      five={<div className='1 mb-1 w-[40px] h-[5px] bg-custom-black gap-1'></div> }
      />
      <h4 className="text-md sm:text-md md:text-md lg:text-md mx-2 my-3 text-[black] font-poppins font-bold">Projects: <span className="text-custom-red">12</span></h4>
      </div>
        
    </div>
      
      
  )
}

export default Skills
