import React from 'react'
import { BiChevronRight } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function Footer() {
  return(
    <footer className='py-16 bg-gray-950 px-12 flex justify-between gap-10 text-slate-200 text-sm flex-wrap mt-10
    md:flex-wrap-nowrap'>
        <Link to='/' className={`text-2xl font-bold tracking-tighter transition-all text-white flex-1`}>
            Guitarras Baratas
        </Link>
        <div className='flex flex-col gap-4 flex-1'>
            <p className='font-semibold uppercase tracking-tighter'>Suscribete</p>
            <p className='text-xs font-medium'>
                Recibe las mejores ofertas y novedades
            </p>
            <div>
                <input type="email" placeholder='correo electronico' className='w-full p-2 border border-slate-700 rounded-md' />
                <button>
                    <BiChevronRight size={20}/>
                </button>
            </div>
        </div>
    </footer>
  )
}
