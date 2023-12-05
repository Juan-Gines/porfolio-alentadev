import tenis from '../assets/images/tennis.jpg'

const Projects = () => {
  return (
    <section className='p-11'>
      <header>
        <h2 className='text-orange-300 text-xl md:text-2xl mb-10'>Mis Proyectos</h2>
      </header>
      <article className='grid grid-flow-col'>
        <div className='w-1/5'>
          <header>
            <h3 className='text-orange-100 text-lg md:text-xl mb-2'>Proyecto 1</h3>
          </header>
        </div>
        <div className='flex flex-col md:flex-row gap-3 rounded-xl overflow-hidden'>
          <figure className='rounded-md md:w-1/2 overflow-hidden '><img className='object-cover h-full' src={tenis} alt='tenis' /></figure>
          <div className='md:w-1/3 p-3'>
            <header>
              <h3 className='text-orange-200 text-lg md:text-xl mb-2'>Proyecto mirando al cielo</h3>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed blanditiis enim placeat, voluptatem illum quod id fugiat quas ut quidem! Quo, quaerat deleniti veritatis facere quae ducimus sequi porro distinctio.</p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-3 rounded-xl overflow-hidden'>
          <figure className='rounded-md md:w-2/3 overflow-hidden '><img className='object-cover h-full' src={tenis} alt='tenis' /></figure>
          <div className='md:w-1/3 p-3'>
            <header>
              <h3 className='text-orange-200 text-lg md:text-xl mb-2'>Proyecto mirando al cielo</h3>
            </header>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed blanditiis enim placeat, voluptatem illum quod id fugiat quas ut quidem! Quo, quaerat deleniti veritatis facere quae ducimus sequi porro distinctio.</p>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Projects
