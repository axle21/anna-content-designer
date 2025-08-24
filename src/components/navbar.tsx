"use client";

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 bg-white/100 backdrop-blur'>
      <div className='mx-auto max-w-6xl px-4 py-3 flex items-center justify-between'>
        <a href='#' className='font-bold text-lg'>
          Ana María Rangel
        </a>
        <nav className='hidden md:flex gap-6 text-sm'>
          <a href='#hero' className='nav-link'>
            Inicio
          </a>
          <a href='#servicios' className='nav-link'>
            Servicios
          </a>
          <a href='#sobreami' className='nav-link'>
            Sobre mí
          </a>
          <a href='#contact' className='nav-link'>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
