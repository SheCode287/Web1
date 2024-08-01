import React from 'react'

function Footer() {
  return (
    <div>

<footer className="bg-custom-black w-full h-auto px-24 py-20 text-custom-light flex flex-row flex-wrap place-content-evenly items-center font-poppins max-md:flex-col max-md:gap-8 max-md:px-6 max-md:py-12">
        {/* logo tagline and social media links */}
        <div className="w-72 flex flex-col  gap-y-8 max-md:w-fit">
          <div className="w-fit flex flex-col  gap-y-4 ">
            <img
              src="/blue Logo (1).svg"
              alt="logo"
              className="w-48 h-14 "
            />
            <p className="text-sm font-normal">
              Lorem ipsum dolor sit amet consectetur. Sem at nullam aliquam quam
              rhoncus amet at lobortis nec
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-base font-semibold">Engage with Me</p>
            <div className="flex flex-row gap-4">
              <img src="instagram icon.svg" alt="instagram icon" />
              <img src="facebook icon.svg" alt="facebook icon" />
              <img src="X icon.svg" alt="X icon" />
            </div>
          </div>
        </div>

        <div className="w-2/3 flex flex-row flex-wrap place-content-between items-start pt-6 max-md:flex-col max-md:gap-6 max-md:w-full">
          


          {/* copyrights */}

          <div className='flex justify-center m-[20px] '>
           <div className='flex justify-center m-[20px] items-center text-right' > Copyright &copy; 2024. All rights reserved. Ivy Wanjohi </div>

        </div>

          

          {/* Contact section */}
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold">Get In Touch</p>
            <div className="flex flex-col gap-3 text-sm font-normal">
              {/* Email Address */}
              <div className="flex flex-row gap-3 items-center">
                <img src="email icon.svg" alt="email icon" />
                <p className="text-sm font-normal">ivymel286@gmail.com</p>
              </div>
              {/* Phone number */}
              <div className="flex flex-row gap-3 items-center">
                <img src="call icon.svg" alt="call icon" />
                <p className="text-sm font-normal">+254 12345678</p>
              </div>
              {/* Address */}
              <div className="flex flex-row gap-3 items-center">
                <img src="address icon.svg" alt="location icon" />
                <p className="text-sm font-normal">
                  Nairobi:00100 - Kenya
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
    </div>
  )
}

export default Footer
