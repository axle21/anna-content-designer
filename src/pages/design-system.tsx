"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function DesignSystem() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      src: "/design-system-image-1.png",
      alt: "SuperApp UX Writing Guidelines - Voz y tono del producto",
    },
    {
      src: "/design-system-image-2.png",
      alt: "Product Content - Consistencia y claridad en el contenido",
    },
    {
      src: "/design-system-image-3.png",
      alt: "Títulos y subtítulos - Guidelines para jerarquía de información",
    },
  ];

  return (
    <div className='min-h-screen bg-background text-foreground'>
      {/* Top bar */}
      <header className='border-b border-border'>
        <nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between'>
          <Link
            href='/'
            className='inline-flex items-center gap-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 nav-link'
            aria-label='Volver al portafolio de proyectos'>
            <ArrowLeft className='h-4 w-4' aria-hidden='true' />
            <span className='text-sm md:text-base'>Volver al portafolio</span>
          </Link>

          <span className='font-semibold text-sm md:text-base tracking-tight'>
            Ana María Rangel
          </span>
        </nav>
      </header>

      {/* Content */}
      <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 md:py-14'>
        <article className='mx-auto max-w-4xl'>
          {/* Hero section */}
          <header className='mb-10 md:mb-12'>
            <h1 className='text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-3'>
              Rappi / Design System / Content
            </h1>
            <p className='text-base md:text-lg text-muted-foreground leading-relaxed'>
              Co-creación del Design System y del Manual de Voz y Tono de la
              marca y su Guía de Estilo.
            </p>

            {/* Image trio */}
            <div className='mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'>
              {images.map((img, i) => (
                <div key={i} className='flex justify-center'>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={500}
                    height={350}
                    onClick={() => setSelectedImage(img.src)}
                    className='w-full max-w-[520px] object-contain rounded-2xl shadow-md border border-border cursor-pointer transition-transform duration-300 hover:scale-[1.02]'
                  />
                </div>
              ))}
            </div>
          </header>

          <section className='space-y-12 md:space-y-16'>
            {/* El desafío */}
            <div>
              <h2 className='text-2xl md:text-3xl font-bold tracking-tight mb-3'>
                El desafío
              </h2>
              <p className='text-base md:text-lg text-muted-foreground leading-relaxed'>
                <strong>Rappi</strong> es reconocida como una de las startups de
                mayor crecimiento en Latinoamérica. Sin embargo, debido a la
                rapidez de su crecimiento, sus procesos en los equipos de diseño
                enfrentaban desafíos como la planeación de la estrategia; la
                creación y el mantenimiento del contenido solían estar
                desconectados entre proyectos y equipos, lo que generaba
                inconsistencias y experiencias fragmentadas para los usuarios
                dentro de la aplicación.
              </p>
            </div>

            {/* Proceso */}
            <div className='mt-10'>
              <h2 className='text-2xl md:text-3xl font-bold tracking-tight mb-4'>
                El proceso
              </h2>
              <p className='text-base md:text-lg text-muted-foreground leading-relaxed'>
                La metodología incluyó{" "}
                <strong>investigación con usuarios</strong>, análisis del
                contenido existente, <strong>workshops colaborativos</strong>{" "}
                con los equipos de diseño y producto, y{" "}
                <strong>research continuo</strong> para validar la efectividad
                de las directrices creadas. Además, junto con los design leads,
                identificamos que ante la ausencia de más content designers era
                necesario definir lineamientos claros que pudieran aplicarse en
                cada proyecto.
              </p>
              <p className='text-base md:text-lg text-muted-foreground leading-relaxed mt-4'>
                De esta forma, nos aseguramos de que los principios del{" "}
                <strong>UX Content Design</strong> se mantuviesen vigentes en
                cada flujo y experiencia, logrando una voz y un tono sólidos y
                coherentes en los diferentes idiomas en los que vive la marca:{" "}
                <strong>
                  español (Latinoamérica), inglés y portugués (Brasil)
                </strong>
                .
              </p>
            </div>

            {/* La estrategia */}
            <div className='mt-10'>
              <h2 className='text-2xl md:text-3xl font-bold tracking-tight mb-4'>
                La estrategia
              </h2>
              <p className='text-base md:text-lg text-muted-foreground leading-relaxed mb-6'>
                A través de la creación del Design System se estableció la
                creación de un contenido integral que sentara las bases para la
                escalabilidad y consistencia en toda la plataforma, enfocándose
                en tres pilares fundamentales:
              </p>

              <ul className='space-y-5'>
                <li>
                  <p className='text-lg font-semibold mb-1'>
                    Manual de Voz y Tono
                  </p>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    Definición de la personalidad de marca: cercana, directa y
                    empática, con tono adaptado según el contexto.
                  </p>
                </li>

                <li>
                  <p className='text-lg font-semibold mb-1'>Guía de Estilo</p>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    Estándares para microcopy, estructura narrativa,
                    localización, traducciones y accesibilidad del contenido.
                  </p>
                </li>

                <li>
                  <p className='text-lg font-semibold mb-1'>
                    Componentes de Contenido
                  </p>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    Templates reutilizables con patrones para casos de uso
                    específicos en las diferentes secciones de la app.
                  </p>
                </li>
              </ul>
            </div>

            {/* Beneficios */}
            <div>
              <h2 className='text-2xl md:text-3xl font-bold tracking-tight mb-4'>
                Los beneficios
              </h2>
              <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
                <div>
                  <h3 className='text-lg font-semibold mb-3'>Para el equipo</h3>
                  <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                    <li>
                      <strong>40% reducción</strong> en tiempo de creación de
                      contenido
                    </li>
                    <li>
                      <strong>Consistencia</strong> entre equipos de producto
                    </li>
                    <li>
                      <strong>Escalabilidad</strong> hacia nuevos mercados
                    </li>
                    <li>
                      <strong>Eficiencia</strong> en procesos de localización
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className='text-lg font-semibold mb-3'>
                    Para los usuarios
                  </h3>
                  <ul className='list-disc pl-6 space-y-2 text-muted-foreground'>
                    <li>
                      <strong>Experiencia unificada</strong> en toda la
                      plataforma
                    </li>
                    <li>
                      <strong>Contenido claro</strong> y fácil de entender
                    </li>
                    <li>
                      <strong>Navegación intuitiva</strong> entre diferentes
                      productos
                    </li>
                    <li>
                      <strong>Confianza</strong> en la marca a través de la
                      consistencia
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>
      {/* Modal */}
      {selectedImage && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm'
          onClick={() => setSelectedImage(null)}>
          <div className='relative'>
            <Image
              src={selectedImage}
              alt='Full view'
              width={1000}
              height={700}
              className='max-h-[85vh] w-auto object-contain rounded-xl shadow-xl'
            />
            <button
              onClick={() => setSelectedImage(null)}
              className='absolute cursor-pointer top-2 right-2 bg-white/90 hover:bg-white rounded-full p-2 text-gray-800 font-bold text-sm shadow'>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
