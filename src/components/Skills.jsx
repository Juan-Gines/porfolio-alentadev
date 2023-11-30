import html from '../assets/html.svg'
import css from '../assets/css.svg'
import javascript from '../assets/javascript.svg'
import react from '../assets/react.svg'
import node from '../assets/node.svg'
import php from '../assets/php.svg'
import laravel from '../assets/laravel.svg'
import c from '../assets/c.svg'
import tailwind from '../assets/tailwind.svg'
import bootstrap from '../assets/bootstrap.svg'
import mysql from '../assets/mysql.svg'
import sqlserver from '../assets/sqlserver.svg'
import mongodb from '../assets/mongodb.svg'
import github from '../assets/github.svg'

const Skills = () => {
  const icons = [
    { icon: html, title: 'HTML' },
    { icon: css, title: 'CSS' },
    { icon: javascript, title: 'Javascript' },
    { icon: react, title: 'ReactJS' },
    { icon: node, title: 'NodeJS' },
    { icon: php, title: 'PHP' },
    { icon: laravel, title: 'Laravel' },
    { icon: c, title: 'C#' },
    { icon: tailwind, title: 'Tailwind' },
    { icon: bootstrap, title: 'Bootstrap' },
    { icon: mysql, title: 'MySql' },
    { icon: sqlserver, title: 'SqlServer' },
    { icon: mongodb, title: 'MongoDB' },
    { icon: github, title: 'Github' }

  ]
  return (
    <section className='flex flex-col items-center m-6 p-6 md:m-10'>
      <header className='mb-5'>
        <h1 className='text-orange-200 text-xl md:text-2xl'>Tecnologías</h1>
      </header>
      <article className='grid grid-cols-7 max-w-[512px]'>
        {icons.map(({ icon, title }, i) => (
          <figure key={i}>
            <img src={icon} title={title} alt={`icono ${title}`} />
          </figure>
        ))}
      </article>
    </section>
  )
}

export default Skills
