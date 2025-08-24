import Image from "next/image";

type Props = {
  title: string;
  blurb: string;
  image: string;
  href?: string | null;
  tags?: string[];
};

export default function ProjectCard({ title, blurb, image, href }: Props) {
  const Content = (
    <div
      className='group rounded-2xl shadow-lg hover:shadow-xl 
             ring-1 ring-gray-200/40 backdrop-blur 
             transition duration-300 transform 
             hover:scale-105
             hover:cursor-pointer
             overflow-hidden bg-white text-center p-8 text-card-foreground mt-8'>
      <div className='flex flex-col items-center justify-center pb-4'>
        <Image src={image} alt={title} width={80} height={80} priority />
      </div>
      <div className='space-y-2'>
        <h3 className='text-xl font-semibold'>{title}</h3>
        <p className='text-base text-muted'>{blurb}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target='_blank' rel='noreferrer'>
      {Content}
    </a>
  ) : (
    Content
  );
}
