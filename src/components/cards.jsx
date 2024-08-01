

function Cards({header, text, image}) {
  return (
    <>
     
        <div className='flex flex-col  justify-center card bg-custom-light text-custom-black max-w-[390px] h-[540px] m-10px rounded-[15px]  hover:bg-custom-grey hover:text-custom-black hover:cursor-pointer'>
            <h2 className='font-bold p-[10px]'>{header}</h2>
            <p className=' p-[10px]'>{text}</p>
            <div className='  flex  justify-center  w-[270px] mb-[15px] bg-[cover] rounded-[15px] p-6 mx-3'><img className="max-w-[190px]" src={image} alt="project-image" /></div>
        </div>
      
    </>
  )
}

export default Cards
