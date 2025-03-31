const MapIframe = () => {
  return (
    <div className="w-full h-[450px] border-0 rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14939.810599736054!2d-99.857399445998!3d20.589991195226126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d39ce5f4adcebd%3A0x549535de8e1221c1!2sCasa%20Conejos%20%2F%20Hacienda%20las%20Adelitas!5e0!3m2!1ses-419!2smx!4v1743409477729!5m2!1ses-419!2smx"
        className="w-full h-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps"
      />
    </div>
  );
};

export default MapIframe;
