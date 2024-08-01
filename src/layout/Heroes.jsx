import React from 'react'

function Heroes() {
  return (
    <div className='ctr contain-content bg-[url(pexels.jpg)] bg-[cover] bg-[center] w-[full] mb-20 sm:mb-20 md:mb-3 lg:mb-2 min-h-[400px] flex flex-row items-center justify-evenly sm:justify-center gap-2 sm:min-h-[500px] md:min-h-[600px] lg:h-[631px] '>
        <div className=' pl-7 lg:pl-7 rounded-[50%] contain-content'><img className='md:w-[180px] xl:w-[334px] xl:h-[auto]' src="Profilepic.png" alt="profile" /></div>
      <div className="cont-ctr contain-content w-[50vw] h-[620px] max-w-4xl px-4 py-6 flex flex-col items-center justify-center gap-2">
          <div className='cont  mb-4 sm:mb-8 md:mb-3 lg:mb-2 min-h-[300px] flex flex-col items-center justify-center gap-2  sm:min-h-[400px] md:min-h-[200px] lg:h-[331px] '>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-[#ffff] font-poppins'>Get To <span className='text-custom-red'>Know Me!</span></h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-center text-[#ffff] font-poppins"> My name is Ivy, I just transitioned into the tech industry, I've wholeheartedly embraced my passion for front-end development.I'm enthusiastic about leveraging my skills to craft intuitive and visually captivating user interfaces. My aim as a front-end developer is to create seamless digital experiences that enhance user engagement and accessibility.</p>
            <button className='font-[600] text-[14px] leading-[21px] align-[center] bg-custom-red h-[45px] w-[200px] rounded-[24px] gap-[10px] border border-custom-red hover:bg-custom-red text-custom-black hover:text-custom-light focus:bg-custom-red focus:text-custom-light active:bg-custom-red active:text-custom-light py-3 px-6'>Resume</button>

          </div>
          
          <div className="feedback relative flex-col sm:flex-row items-center sm:items-start sm:space-x-1 hidden sm:hidden md:hidden lg:block">
          
               

                <div className='absolute feedback-1 rounded-[14px] w-[244px] bottom-8 hover:bottom-6 left-[267px] h-[220px] bg-custom-light hidden lg:block  sm:hidden md:hidden '>
                    <div className='flex justify-between mx-2 my-1 px-3'>
                        <img src="Ellipse 2.svg" alt="" />
                        <div className='text-custom-black font-[600] flex items-center'>3<img src="ic_round-star.svg" alt="" /></div>
                    </div>
                    <p className=' text-custom-black text-left p-2 pb-6 text-sm sm:text-base md:text-md font-normal'> consistently delivers high-quality, responsive web designs, her attention to detail have significantly enhanced our UI.</p>
                    <div>
                        <h4 className='text-custom-black text-left px-2 text-sm  md:text-md font-semibold'>Laura Ailing</h4>
                        <span className='text-custom-black text-left px-2 text-sm  md:text-md font-normal'>CEO-amazon</span>
                    </div>
                </div>
                <div className='feedback-2 rounded-[14px] w-[224px] h-[230px] bg-custom-light border-[2px] hover:border-custom-red hidden lg:block sm:hidden md:hidden '>
                    <div className='flex justify-between mx-2 my-1 px-3'>
                        <img src="Ellipse 2.svg" alt="" />
                        <div className='text-custom-black font-[600] flex items-center'>4<img src="ic_round-star.svg" alt="" /></div>
                    </div>
                    <p className=' text-custom-black text-left p-3 text-sm sm:text-base md:text-md  font-normal'> Her seamless API integrations and focus on performance optimization have greatly improved our user experience.</p>
                    <div>
                        <h4 className='text-custom-black text-left px-2 text-sm  md:text-md font-semibold'>Kamala Harris</h4>
                        <span className='text-custom-black text-left px-2 text-sm  md:text-md font-normal'>Director-SheCode</span>
                    </div>
                </div>
          </div>
      </div>
       
      
    </div>
  )
}

export default Heroes
