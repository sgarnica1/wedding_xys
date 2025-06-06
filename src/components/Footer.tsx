const Footer = () => {
  return (
    <section className='flex flex-col justify-center items-end bg-bg-secondary rounded-tl-[16%] py-20 px-6'>
      <div className='flex flex-col justify-center items-end max-w-[500px] mx-auto'>
        <h2 className='text-[3.2rem] sm:text-6xl font-bold font-primary leading-[0.8] text-secondary uppercase mb-6'>Niños</h2>
        <span className='h-20 w-[2px] bg-secondary'></span>
        <p className='font-secondary font-medium text-xl uppercase mt-5 align-end text-right'>
          Hemos decidido que este evento sea sin niños <span className='font-bold'>(Excepto bebés en etapa de lactancia)</span>.
        </p>
        <p className='font-secondary font-medium text-xl uppercase mt-5 align-end text-right'>
          Esperamos esto no sea un impedimento para poder celebrar con nosotros.
        </p>
      </div>
    </section>
  )
}

export default Footer