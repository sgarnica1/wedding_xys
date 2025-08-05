import { useParams } from 'react-router-dom'
import { GUESTS } from '../utils/guests'
import Hero from '../components/Hero'
import SaveTheDate from '../components/SaveTheDate'
import Invite from '../components/Invite'
import BackgroundImage from '../components/BackgroundImage'
import Itinerary from '../components/Itinerary'
import DressCode from '../components/DressCode'
import BackgroundImage2 from '../components/BackgroundImage2'
import Gifts from '../components/Gifts'
import Map from '../components/Map'
import Footer from '../components/Footer'
import NotFound from './NotFound'
import MobileOnly from '../components/MobileOnly'

const Home = () => {

  const { id: name } = useParams()

  if (name && !(name in GUESTS))
    return (
      <NotFound />
    )

  return (
    <MobileOnly>
      <div>
        <Hero />
        <SaveTheDate />
        <BackgroundImage />
        <Invite />
        <Itinerary />
        <DressCode />
        <BackgroundImage2 />
        <Gifts />
        <Footer />
        <Map />
      </div>
    </MobileOnly>
  )
}

export default Home