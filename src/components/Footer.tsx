const Footer = () => {
  return (
    <section className='flex flex-col justify-center items-center pt-10 px-10'>
      <div className='flex flex-col justify-center items-center max-w-[500px] mx-auto'>
        <h2 className='font-primary text-3xl uppercase mb-2 text-center'>Niños</h2>
        <p className='font-secondary font-light text-lg mt-5 text-center'>
          Hemos decidido que este evento sea sin niños <span className='font-medium font-secondary text-md'>(Excepto bebés en etapa de lactancia)</span>.
        </p>
        <p className='font-secondary font-light text-lg mt-5 text-center'>
          Esperamos esto no sea un impedimento para poder celebrar con nosotros.
        </p>
      </div>
    </section>
  )
}

export default Footer