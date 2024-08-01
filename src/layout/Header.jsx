

function Header() {
  return (
    <div className='flex justify-between items-center py-6 lg:py-4 px-6 md:px-10 lg:px-20 xl:px-24 w-full bg-custom-light h-24 mb-0'>
      <div className='  item-center  p-0 md:w-[80px] xl:w-[170px] xl:h-[90px] pl-7 lg:pl-7 hidden  lg:flex md:flex sm:hidden '><img className='  rounded-[50%]' src="../blue Logo (1).svg" alt="logo" /></div>

      <nav className='flex items-center justify-center cursor-pointer w-full md:text-sm'>
        <ul className='flex gap-2 md:w-4/6 md:px-6 lg:space-x-5 md:space-x-5 xl:text-base justify-end text-custom-light font-semibold md:p-0 cursor-pointer sm:bg-custom-black md:text-custom-black md:bg-custom-light p-10  top-0 sm:h-screen md:h-[6rem] lg:h-20  w-1/2'>
            <li className="hover:text-custom-red focus:text-custom-red active:text-custom-red focus:font-bold m-6">About Me</li>
            <li className="hover:text-custom-red focus:text-custom-red active:text-custom-red focus:font-bold m-6">Projects</li>
            <li className="hover:text-custom-red focus:text-custom-red active:text-custom-red focus:font-bold m-6">Skills</li>
        </ul>
      </nav>

      <button className="bg-white border border-custom-red hover:bg-custom-red text-custom-red hover:text-custom-light focus:bg-custom-red focus:text-custom-light active:bg-custom-red active:text-custom-light py-2 px-5">Contact</button>

    </div>
  )
}

export default Header
