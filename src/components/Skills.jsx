import skillIconList from './partials/skillIconList'

const Skills = () => {
  const iconList = skillIconList
  return (
    <section className='flex flex-col items-center m-6 p-6 md:m-10'>
      <header className='mb-10'>
        <h1 className='text-orange-300 text-xl md:text-2xl'>Tecnologías</h1>
      </header>
      <article className='grid grid-cols-7 max-w-[512px]'>
        {iconList.map(({ icon, title }, i) => (
          <figure key={i}>
            <img src={icon} title={title} alt={`icono ${title}`} />
          </figure>
        ))}
      </article>
    </section>
  )
}

export default Skills
