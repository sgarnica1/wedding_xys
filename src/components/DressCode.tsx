import DressCodeImage from '../assets/icons/dresscode.svg';

const colors = ["#BD9469", "#937E6A", "#9C644D", "#71383A", "#5D4032", "#836414", "#808000", "#36482E", "#322F20", "#18181A"]

const DressCode = () => {
  return (
    <section className='flex flex-col justify-center items-center py-10 px-6'>
      <div className='flex flex-col justify-center items-center max-w-[500px] mx-auto'>
        <h2 className='text-xl font-thin font-primary uppercase mb-10'>Codigo de vestimenta</h2>
        <div className='flex flex-col justify-center items-center mb-10'>
          <p className='text-lg font-primary font-medium uppercase'>Formal</p>
          <p className='text-xs font-primary font-thin uppercase'>(No Blanco)</p>
        </div>
        <img src={DressCodeImage} alt="Dress Code" className='w-full max-w-[90px] mb-12' />
        <div className='grid grid-cols-5 gap-3 justify-items-center mb-10 max-w-xs mx-auto'>
          {colors.map((color, index) => (
            <div key={index} className='w-10 h-10 rounded-full' style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DressCode