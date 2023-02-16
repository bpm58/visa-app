import React from 'react';
import { Link } from 'react-router-dom';
import IconExclamationTriangleFill from '../icons/IconExclamationTriangleFill';

export default function NavBar() {
  return (
    <div className='bg-zinc-800'>
      <div className='container mx-auto flex p-6 bg-zinc-800 items-center justify-between'>
        <Link className='font-bold text-2xl' to='/'>
          Putne kartice 🗺️
        </Link>
        <Link
          className='text-xl flex items-center hover:underline hover:underline-offset-2'
          to='/disclaimer'
        >
          {IconExclamationTriangleFill()}
          Napomena
        </Link>
      </div>
    </div>
  );
}
