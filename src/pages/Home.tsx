import { useParams } from 'react-router-dom'
import { GUESTS } from '../utils/guests'
import Hero from '../components/Hero'
import SaveTheDate from '../components/SaveTheDate'
import Invite from '../components/Invite'
import Itinerary from '../components/Itinerary'
import DressCode from '../components/DressCode'
import Gifts from '../components/Gifts'
import Lodging from '../components/Lodging'
import Map from '../components/Map'
import Footer from '../components/Footer'
import NotFound from './NotFound'

const Home = () => {

  const { id: name } = useParams()

  if (name && !(name in GUESTS))
    return (
      <NotFound />
    )

  return (
    <div>
      <Hero />
      <SaveTheDate />
      <Invite />
      <Itinerary />
      <DressCode />
      <Gifts />
      <Lodging />
      <Map />
      <Footer />
    </div>
  )
}

export default Home