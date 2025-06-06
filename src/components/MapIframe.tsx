const MapIframe = () => {
  return (
    <div className="w-full h-[450px] border-0 rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.1085327619053!2d-100.78412379999999!3d20.907952700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b51244a04d7b5%3A0x19822522c6aa5444!2zSGFjaWVuZGEg4oCcTGEgR2xvcmlh4oCd!5e0!3m2!1ses-419!2smx!4v1749168478916!5m2!1ses-419!2smx"
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