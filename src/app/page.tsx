import ServicesCard from "@/components/services-card";
import ProjectsCard from "@/components/project-cards";
import { services, projects } from "@/data/projects";
import Image from "next/image";
import Typewriter from "@/components/Typewriter";

export default function HomePage() {
  return (
    <div className=''>
      {/* HERO */}
      <section
        id='hero'
        className='hero hero-aurora flex flex-col items-center justify-center text-center py-12 px-4'>
        <h1 className='text-4xl md:text-6xl font-bold tracking-tight text-white'>
          Ana María Rangel
        </h1>
        <p className='mt-4 text-md md:text-2xl max-w-2xl text-white'>
          Ux Content Designer & Copywriter
        </p>
        <div className='max-w-2xl mt-6 flex gap-3 p-5 rounded-3xl glass'>
          <div className='text-2xl font-medium text-white whitespace-pre-line'>
            <Typewriter />
          </div>
        </div>
        <a href='#contact' className='lets-work-together-btn'>
          Lets work together
        </a>
      </section>

      {/* SERVICIOS */}
      <section id='servicios' className='p-12 md:p-20 border-t about-section'>
        <div className='flex flex-col items-center justify-center text-center'>
          <h2 className='text-2xl md:text-4xl font-bold mb-6'>
            Mis superpoderes
          </h2>
          <p className='text-muted-foreground max-w-2xl text-base about-subtext'>
            Conectar las necesidades y experiencias de las personas usuarias con
            productos y marcas a través de:
          </p>
        </div>

        <div className='mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map((p) => (
            <ServicesCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id='sobreami' className='p-12 md:p-20'>
        <div className='mx-auto max-w-7xl px-4 md:px-6'>
          <div className='grid items-center gap-10 md:grid-cols-2'>
            {/* Text */}
            <div className='space-y-6'>
              <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
                Sobre mí
              </h2>

              <div className='space-y-4 text-muted text-lg leading-7'>
                <p>
                  Soy Content Designer con experiencia en{" "}
                  <strong>Copywriting</strong> y <strong>SEO</strong> en
                  contenidos; gracias a mi pasión por el diseño de experiencias
                  y la creatividad, desde hace <strong>más de 7 años</strong> he
                  ayudado a transformar ideas complejas en mensajes claros y
                  poderosos que conectan las marcas con las personas.
                </p>
                <p>
                  Mi enfoque va más allá de simplemente escribir bien. Entiendo
                  a fondo a las personas usuarias, sus necesidades y
                  motivaciones, y creo estrategias de contenido que se traducen
                  en soluciones claras, accesibles y medibles.
                </p>
                <p>
                  En cada proyecto en el que he participado he respaldado que el
                  contenido correcto en el momento indicado transforma los
                  resultados de las marcas y los productos.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className='relative aspect-[4/3] w-full max-w-[640px] overflow-hidden rounded-3xl shadow-lg ring-1 ring-black/5'>
              <Image
                src='/anna-image.png'
                alt='Foto de Ana'
                fill
                priority
                sizes='(min-width:1024px) 560px, 100vw'
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </section>
      {/* project */}
      <section id='proyectos' className='p-12 md:p-20 project-section'>
        <div className='flex flex-col items-center justify-center text-center gap-8 mb-8 '>
          <h2 className='text-3xl font-extrabold tracking-tight sm:text-4xl'>
            Proyectos
          </h2>
          <p className='text-muted max-w-2xl text-lg'>
            Conoce algunos de los proyectos en donde mi experiencia y
            conocimientos han impactado de manera positiva los resultados.
          </p>
        </div>
        <div className='mx-auto max-w-6xl px-4 md:px-6 grid grid-cols-1 gap-6 md:grid-cols-2'>
          {projects.map((p) => (
            <ProjectsCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section
        id='contact'
        className='contact-section hero-aurora  flex flex-col items-center justify-center text-center py-12 px-4'>
        <h1 className='text-4xl font-bold tracking-tight text-white'>
          Contáctame y transformemos tu contenido
        </h1>
        <p className='my-8 text-lg text-muted max-w-2xl text-white'>
          Hablemos de cómo puedo ayudarte a conectar con tus usuarios y lograr
          los resultados que buscas.
        </p>
        <div className='flex gap-8'>
          <a
            href='mailto:anamariarangel22@outlook.com'
            className='lets-work-together-btn'>
            Enviar un correo
          </a>
          <a
            href='https://www.linkedin.com/in/ana-maria-rangel-z-54723a158/'
            className='lets-work-together-btn'
            target='_blank'
            rel='noopener noreferrer'>
            Connectar por Linkedin
          </a>
        </div>
      </section>
    </div>
  );
}
