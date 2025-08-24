import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function DesignSystem() {
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
            <div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
              <Image
                src='/design-system-image-1.png'
                alt='SuperApp UX Writing Guidelines - Voz y tono del producto'
                width={400}
                height={300}
                className='w-full aspect-[4/3] object-cover rounded-xl shadow-sm border border-border'
              />
              <Image
                src='/design-system-image-2.png'
                alt='Product Content - Consistencia y claridad en el contenido'
                width={400}
                height={300}
                className='w-full aspect-[4/3] object-cover rounded-xl shadow-sm border border-border'
              />
              <Image
                src='/design-system-image-3.png'
                alt='Títulos y subtítulos - Guidelines para jerarquía de información'
                width={400}
                height={300}
                className='w-full aspect-[4/3] object-cover rounded-xl shadow-sm border border-border'
              />
            </div>
          </header>

          <section className='space-y-12 md:space-y-16'>
            {/* El desafío */}
            <div>
              <h2 className='text-2xl md:text-3xl font-bold tracking-tight mb-3'>
                El desafío
              </h2>
              <p className='text-base md:text-lg text-muted-foreground leading-relaxed'>
                Durante mi tiempo en <strong>Rappi</strong>, identifiqué la
                necesidad de crear consistencia en el contenido de la SuperApp.
                Los equipos trabajaban de manera independiente, generando
                experiencias fragmentadas para los usuarios en diferentes
                mercados y productos.
              </p>
            </div>

            {/* La estrategia */}
            <div>
              <h2 className='text-2xl md:text-3xl font-bold tracking-tight mb-3'>
                La estrategia
              </h2>
              <p className='text-base md:text-lg text-muted-foreground leading-relaxed mb-6'>
                Co-creé un Design System de contenido integral que estableciera
                las bases para la escalabilidad y consistencia en toda la
                plataforma, enfocándome en tres pilares fundamentales:
              </p>

              <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
                <div className='rounded-xl bg-card p-5'>
                  <h3 className='font-semibold mb-2'>Manual de Voz y Tono</h3>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    Definición de la personalidad de marca: cercana, directa y
                    empática, con tono adaptativo según contexto.
                  </p>
                </div>
                <div className='rounded-xl bg-card p-5'>
                  <h3 className='font-semibold mb-2'>Guía de Estilo</h3>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    Estándares para microcopy, estructura narrativa,
                    localización y accesibilidad del contenido.
                  </p>
                </div>
                <div className='rounded-xl bg-card p-5'>
                  <h3 className='font-semibold mb-2'>
                    Componentes de Contenido
                  </h3>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    Templates reutilizables y patterns para casos de uso
                    específicos en toda la SuperApp.
                  </p>
                </div>
              </div>
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

            {/* Proceso */}
            <div>
              <h2 className='text-2xl md:text-3xl font-bold tracking-tight mb-3'>
                El proceso
              </h2>
              <p className='text-base md:text-lg text-muted-foreground leading-relaxed'>
                La metodología incluyó{" "}
                <strong>investigación con usuarios</strong>, análisis del
                contenido existente, <strong>workshops colaborativos</strong>{" "}
                con equipos de diseño y producto, y testing continuo para
                validar la efectividad de las nuevas directrices. El resultado
                fue un lenguaje unificado implementado en{" "}
                <strong>
                  los países de habla hispana en donde tiene presencia la marca
                </strong>
                .
              </p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}
