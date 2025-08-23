"use client";

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 bg-white/100 backdrop-blur'>
      <div className='mx-auto max-w-6xl px-4 py-3 flex items-center justify-between'>
        <a href='#' className='font-bold text-lg'>
          Ana María Rangel
        </a>
        <nav className='flex gap-6 text-sm'>
          <a href='#hero' className='hover:underline'>
            Inicio
          </a>
          <a href='#servicios' className='hover:underline'>
            Servicios
          </a>
          <a href='#sobreami' className='hover:underline'>
            Sobre mí
          </a>
          <a href='#contact' className='hover:underline'>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
