import React from 'react';
import { countries } from '../countriesData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CountryListItem from '../components/CountryListItem';

export default function CountryList() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = countries.filter(
    (filteredCountry) =>
      filteredCountry.name_rs
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      filteredCountry.capital_rs
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      filteredCountry.slug_rs.includes(searchTerm.toLowerCase())
  );

  return (
    <React.Fragment>
      <div className='container mx-auto flex pt-8 pb-4 pl-6 pr-6 gap-4 flex-col md:items-center md:justify-between md:flex-row'>
        <div className='w-full max-w-sm'>
          <input
            type='text'
            id='countrySearch'
            className='bg-zinc-800 border border-zinc-700 text-white text-l rounded-sm block w-full px-4 py-2 placeholder:opacity-60'
            placeholder='Pretraga po imenu države ili glavnog grada...'
            required
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <div className=''>Broj država: {filteredCountries.length}</div>
      </div>

      <div className='container mx-auto bg-zinc-900 p-6 display-grid grid-3 space-y-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:space-y-0'>
        {filteredCountries.map((country) => (
          <Link
            key={country.name}
            to={`/countries/${country.slug_rs}`}
            className='country-list-item p-4 flex flex-col gap-6 items-baseline border border-zinc-700 rounded-sm shadow-lg bg-zinc-800'
          >
            <CountryListItem slug={country.slug} name={country.name_rs} />
          </Link>
        ))}
        {filteredCountries.length == 0 && <div>Nema rezultata</div>}
      </div>
    </React.Fragment>
  );
}
