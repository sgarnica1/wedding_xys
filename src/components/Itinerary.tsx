import ItineraryImage from "../assets/images/itinerary.png"

const Itinerary = () => {
  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-accent">
      <div className="w-full max-w-md mx-auto">
        {/* Image container with responsive width */}
        <img
          src={ItineraryImage}
          alt="Itinerary Image"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  )
}

export default Itinerary