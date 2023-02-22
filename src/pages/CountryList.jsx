import React, { useEffect, useRef, useMemo } from 'react';
import { countries } from '../countriesData';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import CountryListItem from '../components/CountryListItem';

export default function CountryList() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpened, setIsFilterOpened] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const filteDropdownrRef = useRef();
  const searchInputRef = useRef();

  const filteredCountries = useMemo(() => {
    if (selectedOption === '') {
      if (searchTerm === '') {
        return countries;
      } else {
        return countries.filter(
          (filteredCountry) =>
            filteredCountry.name_rs
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            filteredCountry.capital_rs
              .toLowerCase()
              .includes(searchTerm.toLowerCase()) ||
            filteredCountry.slug_rs.includes(searchTerm.toLowerCase())
        );
      }
    }

    return countries.filter((filteredCountry) => {
      if (selectedOption.toLowerCase().includes('nije')) {
        return (
          filteredCountry.national.includes('nije') ||
          filteredCountry.diplomatic.includes('nije')
        );
      } else {
        return (
          !filteredCountry.national.includes('nije') ||
          !filteredCountry.diplomatic.includes('nije')
        );
      }
    });
  }, [selectedOption, searchTerm]);

  const visaFilter = ['Potrebna', 'Nije potrebna'];

  const handleVisaFilterClick = (event) => {
    setSelectedOption(event.target.textContent);
    setIsFilterOpened(false);
    setSearchTerm('');
    searchInputRef.current.value = '';
  };

  const handleRemoveFilter = () => {
    setSelectedOption('');
    setIsFilterOpened(false);
  };

  const handleClickOutside = (event) => {
    if (!filteDropdownrRef.current.contains(event.target)) {
      setIsFilterOpened(false);
    }
  };

  useEffect(() => {
    searchTerm !== '' && setSelectedOption('');

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchTerm]);

  return (
    <React.Fragment>
      <div className='container mx-auto pt-8 pb-4 pl-6 pr-6'>
        <div className='flex gap-4 items-baseline flex-wrap lg:justify-between lg:flex-nowrap'>
          <div className='w-full flex flex-col gap-4 md:items-center md:flex-row'>
            <div className='w-full max-w-sm'>
              <input
                type='text'
                id='countrySearch'
                className='bg-zinc-800 border border-zinc-700 text-white text-sm md:text-base rounded-sm block w-full px-2 py-2 placeholder:opacity-60'
                placeholder='Pretraga po imenu države ili glavnog grada...'
                required
                ref={searchInputRef}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
            <div>Broj država: {filteredCountries.length}</div>
          </div>
          <div className='flex gap-2 items-center relative md:w-full md:max-w-[10rem]'>
            <span>Filter:</span>
            <button
              type='button'
              onClick={() => setIsFilterOpened(!isFilterOpened)}
              className='bg-zinc-800 border border-zinc-700 text-white text-base rounded-sm w-full px-6 py-2 hover:bg-zinc-700'
            >
              Viza
            </button>
            <div
              className={`${
                !isFilterOpened ? 'hidden' : ''
              } absolute bottom-[-5.5rem] w-full text-center border z-[1] border border-zinc-700 rounded-sm shadow-lg bg-zinc-800`}
              ref={filteDropdownrRef}
            >
              {visaFilter.map((filterName, index) => {
                return (
                  <div
                    key={index}
                    className='w-full px-2 py-2 cursor-pointer hover:bg-zinc-700'
                    data-visa={filterName.toLowerCase().replace(' ', '_')}
                    onClick={handleVisaFilterClick}
                  >
                    {filterName}
                  </div>
                );
              })}
            </div>
          </div>
          {selectedOption && (
            <div className='flex items-center gap-2 flex-none'>
              <span
                className={`py-2 px-4 rounded-sm ${
                  selectedOption.toLowerCase().includes('nije')
                    ? `bg-green-800`
                    : `bg-red-500`
                }`}
              >
                {selectedOption}
              </span>
              <button
                onClick={handleRemoveFilter}
                className='bg-zinc-700 rounded-full w-8 h-8 hover:bg-zinc-600'
              >
                x
              </button>
            </div>
          )}
        </div>
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
