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
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block group rounded-2xl shadow-lg hover:shadow-xl 
                ring-1 ring-gray-200/40 backdrop-blur 
                transition duration-300 transform 
                hover:scale-105 cursor-pointer overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary"
      aria-label={`${cta}: ${title}`}
    >
      <div className="relative h-40 sm:h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>

      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-semibold leading-tight">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          {excerpt}
        </p>

        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/90 group-hover:text-foreground">
          {cta}
          <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
