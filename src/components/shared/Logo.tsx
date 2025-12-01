import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link to='/' className={`text-2xl font-bold tracking-tighter transition-all`}>
        <p className='hidden lg:block'>
            Guitarras
            <span className='text-cyan-600'>Baratas</span>
        </p>
        <p className='flex text-4xl lg:hidden'>
            <span className='-skew-6'>G</span>
            <span className='text-cyan-600 skew-x-6'>B</span>
        </p>
    </Link>
  )
}
