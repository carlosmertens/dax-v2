import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoNav from '../images/logoNav.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='bg-gray-800 lg:flex lg:items-center lg:justify-between'>
      <div className='flex items-center justify-between px-4 py-3'>
        <Link to='/'>
          <img src={logoNav} alt='Dax Logo' className='h-14' />
        </Link>

        <div className='lg:hidden'>
          <button
            className='text-gray-300 hover:text-yellow-400 focus:text-yellow-400 focus:outline-none'
            type='button'
            onClick={() => {
              setIsOpen(!isOpen);
            }}>
            <svg
              className='h-12 w-12 fill-current'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              {isOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } px-2 pt-4 pb-8 lg:flex lg:items-center lg:justify-between 2xl:text-xl`}>
        <Link
          to='/empresa'
          className='block mt-4 px-2 py-1 text-white uppercase rounded hover:bg-gray-700 hover:text-yellow-400 focus:bg-gray-700 focus:text-yellow-400 focus:outline-none lg:mx-4'>
          empresa
        </Link>
        <Link
          to='/industrias'
          className='block mt-4 px-2 py-1 text-white uppercase rounded hover:bg-gray-700 hover:text-yellow-400 focus:bg-gray-700 focus:text-yellow-400 focus:outline-none lg:mx-4'>
          industrias
        </Link>
        <Link
          to='/tutoriales'
          className='block mt-4 px-2 py-1 text-white uppercase rounded hover:bg-gray-700 hover:text-yellow-400 focus:bg-gray-700 focus:text-yellow-400 focus:outline-none lg:mx-4'>
          tutoriales
        </Link>
        <Link
          to='/contactos'
          className='block mt-4 px-2 py-1 text-white uppercase rounded hover:bg-gray-700 hover:text-yellow-400 focus:bg-trueGray-700 focus:text-yellow-400 focus:outline-none lg:mx-4'>
          contactos
        </Link>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } px-2 pt-4 pb-8 lg:flex lg:items-center lg:justify-between`}>
        <button className='mt-4 px-2 py-1 mr-4 bg-yellow-400 rounded-2xl text-xl hover:bg-yellow-300 focus:outline-none'>
          Ingresar
        </button>
        <button className='mt-4 px-2 py-1 bg-yellow-400 rounded-2xl text-xl hover:bg-yellow-300 focus:outline-none'>
          Crear cuenta
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
