import Cards from "../components/cards"

function Projects() {
  return (
    <div className="main flex justify-center bg-custom-pink">
      <div className=' container flex items-center  flex-wrap  gap-8 justify-center min-w-[400px] w-full py-3'>
      <Cards
        header={'Gen_Z DICTIONARY'}
        text={' Users can easily search for a particular abbreviation or term within the app.The app provides instant access to the full meaning or definition of the searched term, aiding users who may be unfamiliar or confused by contemporary slang.'}
        image={'./Gen_z_Dictionary.png'}
       />
      <Cards
        header={'FEEDBACK APPLICATION'}
        text={'Users are presented with a user-friendly form to submit their reviews.The form prompts users to rate their experience and articulate their thoughts through text reviews.'}
        image={'./FeedBack_App.PNG'}
       />
      <Cards
        header={'DEEZER_APP (Reformed'}
        text={'This project was undertaken with the goal of reimagining the Deezer music website,A sample of music was seamlessly integrated into the landing page,animated representation of music ultrasound was introduced,the aim was to enhance the overall user experience and aesthetic appeal'}
        image={'./Deezer_Music_App.PNG'}
       />
      <Cards
        header={'ChatterChum'}
        text={'ChaterChum is a Next.js and TypeScript app designed to help kids with speech delays. It offers secure link-sharing for educational resources, featuring user authentication, link creation, and customization. With a pixel-perfect, responsive design, ChaterChum ensures a smooth user experience on all devices.'}
        image={'chatter app.PNG'}
       />
      <Cards
        header={'E-commerce_Web'}
        text={'This E-commerce project, built with React and Next.js, offers a responsive shopping platform with Tailwind CSS. It features product listings, a shopping cart, and user account management, with efficient API interactions handled by TimbuApi.js. Optimized with Vite, it provides a seamless shopping experience across all devices.'}
        image={'eccomerce.jpg'}
       />
      </div>
    </div>
    
  )
}

export default Projects
