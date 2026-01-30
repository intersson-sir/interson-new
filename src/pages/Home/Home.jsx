import Hero from './sections/Hero/Hero'
import Partners from './sections/Partners/Partners'
import ServicesPreview from './sections/ServicesPreview/ServicesPreview'
import ReviewsPreview from './sections/ReviewsPreview/ReviewsPreview'
import Process from './sections/Process/Process'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Hero />
      <Partners />
      <ServicesPreview />
      <ReviewsPreview />
      <Process />
    </div>
  )
}

export default Home
