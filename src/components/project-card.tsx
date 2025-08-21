import Image from 'next/image'

type Props = {
  title: string
  blurb: string
  image: string
  href?: string
  tags?: string[]
}

export default function ProjectCard({ title, blurb, image, href, tags = [] }: Props) {
  const Content = (
    <div className="group rounded-2xl border hover:shadow-lg transition-shadow overflow-hidden bg-card">
      <div className="relative aspect-[16/10]">
        <Image src={image} alt={title} fill className="object-cover" priority />
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{blurb}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {tags.map(t => (
              <span key={t} className="text-xs border rounded-full px-2 py-0.5">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )

  return href ? <a href={href} target="_blank" rel="noreferrer">{Content}</a> : Content
}
