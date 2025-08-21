import ProjectCard from "@/components/project-card";
import { projects } from "@/data/projects";

export default function HomePage() {
  return (
    <div className=''>
      {/* HERO */}
      <section className='hero hero-aurora  flex flex-col items-center justify-center text-center py-12 px-4'>
        <h1 className='text-4xl md:text-6xl font-bold tracking-tight text-white'>
          Ana María Rangel
        </h1>
        <p className='mt-4 text-md md:text-2xl text-muted-foreground max-w-2xl text-white'>
          Ux Content Designer & Copywriter
        </p>
        <div className='max-w-2xl mt-6 flex gap-3 p-5 rounded-3xl glass'>
          <p className='text-2xl text-muted-foreground text-white'>
            “My superpower is making difficult things easy to understand through
            content, achieving measurable results, and focusing on the user.”
          </p>
        </div>
        <a href='#portfolio' className='lets-work-together-btn'>
          Lets work together
        </a>
      </section>

      {/* ABOUT */}
      <section id='about' className='py-12 border-t'>
        <h2 className='text-2xl font-semibold'>About</h2>
        <p className='mt-3 text-muted-foreground max-w-3xl'>
          I’m Ana. I craft content systems, voice & tone, and concise UX copy.
          Here’s a selection of recent work.
        </p>
      </section>

      {/* PORTFOLIO */}
      <section id='portfolio' className='py-12 border-t'>
        <h2 className='text-2xl font-semibold'>Portfolio</h2>
        <div className='mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id='contact' className='py-12 border-t'>
        <h2 className='text-2xl font-semibold'>Contact</h2>
        <p className='mt-3 text-muted-foreground'>
          Email me at{" "}
          <a className='underline' href='mailto:hello@example.com'>
            hello@example.com
          </a>
          .
        </p>
      </section>
    </div>
  );
}
