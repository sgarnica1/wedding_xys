import DressCodeImage from '../assets/icons/dresscode.svg';

const colors = ["#937E6A", "#BD9469", "#71383A", "#B2A69B", "#8C8A8D"]

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
        <h2 className='text-xl font-thin font-primary uppercase mb-10'>Sugerencias de <span className='font-medium'>Colores</span></h2>
        <div className='flex flex-row justify-center items-center mb-10 gap-3'>
          {colors.map((color, index) => (
            <div key={index} className='w-10 h-10 rounded-full' style={{ backgroundColor: color }} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default DressCode