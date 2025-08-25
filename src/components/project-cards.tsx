// components/project-card.tsx
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

type ProjectCardProps = {
  title: string;
  excerpt: string;
  href: string;
  image: string; // /public/... path (e.g. "/images/rappi-gifting.png")
  cta?: string;
};

export default function ProjectCard({
  title,
  excerpt,
  href,
  image,
  cta = "Ver proyecto completo",
}: ProjectCardProps) {
  return (
    <article
      className='ggroup rounded-2xl shadow-lg hover:shadow-xl 
             ring-1 ring-gray-200/40 backdrop-blur 
             transition duration-300 transform 
             hover:scale-105
             hover:cursor-pointer
             overflow-hidden'>
      {/* image */}
      <div className='relative h-40 sm:h-48'>
        <Image
          src={image}
          alt={title}
          fill
          className='object-unset sm:object-cover'
          sizes='(min-width: 768px) 50vw, 100vw'
          priority={false}
        />
      </div>

      {/* content */}
      <div className='p-5 sm:p-6'>
        <h3 className='text-lg font-semibold leading-tight'>{title}</h3>
        <p className='mt-2 text-sm text-muted-foreground leading-relaxed'>
          {excerpt}
        </p>

        <Link
          href={href}
          className='mt-4 inline-flex hover:underline items-center gap-1.5 text-sm font-medium text-foreground/90 hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary rounded-sm'
          aria-label={`${cta}: ${title}`}
          target='_blank'
          rel='noreferrer'>
          {cta}
          <ExternalLink className='h-4 w-4 transition-transform group-hover:translate-x-0.5' />
        </Link>
      </div>
    </article>
  );
}
