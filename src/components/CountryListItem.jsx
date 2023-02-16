import React from 'react';

export default function CountryListItem({ slug, name }) {
  return (
    <div className='flex items-center gap-4 w-full justify-between'>
      <img
        className='h-auto w-14 rounded-sm'
        src={`/public/flags/${slug}.png`}
        alt={slug}
      />
      <h5 className='text-2xl font-bold tracking-tight text-white'>{name}</h5>
    </div>
  );
}
