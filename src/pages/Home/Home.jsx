import Hero from './sections/Hero/Hero'
import Partners from './sections/Partners/Partners'
import ServicesPreview from './sections/ServicesPreview/ServicesPreview'
import ReviewsPreview from './sections/ReviewsPreview/ReviewsPreview'
import Process from './sections/Process/Process'
import ServicesGrid from './sections/ServicesGrid/ServicesGrid'
import Subscription from './sections/Subscription/Subscription'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Hero />
      <Partners />
      <ServicesPreview />
      <ReviewsPreview />
      <Process />
      <ServicesGrid />
      <Subscription />
    </div>
  )
}

export default Home
