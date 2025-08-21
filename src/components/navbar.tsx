"use client";

export default function Navbar() {
  return (
    <header className='sticky top-0 z-50 bg-white/100 backdrop-blur'>
      <div className='mx-auto max-w-6xl px-4 py-3 flex items-center justify-between'>
        <a href='#' className='font-bold text-lg'>
          Ana María Rangel
        </a>
        <nav className='flex gap-6 text-sm'>
          <a href='#about' className='hover:underline'>
            About
          </a>
          <a href='#portfolio' className='hover:underline'>
            Portfolio
          </a>
          <a href='#contact' className='hover:underline'>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
