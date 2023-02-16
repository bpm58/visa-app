import React from 'react';
import { useParams } from 'react-router-dom';
import { countries } from '../countriesData';
import useWeatherAPI from '../hooks/useWeatherAPI';
import { temperatureColor } from '../temperatureColor';

export default function Country() {
  const { countrySlugRs } = useParams();

  return (
    <div className='w-full h-full p-6 md:p-10'>
      <div className='shadow-lg max-w-3xl w-full p-4 flex flex-col gap-4 items-baseline border border-zinc-700 rounded-sm shadow-lg bg-zinc-800 m-auto'>
        {countries
          .filter((filteredCountry) => {
            return filteredCountry.slug_rs == countrySlugRs;
          })
          .map((country) => (
            <React.Fragment key={country.slug_rs}>
              <div className='flex items-center justify-between w-full pb-6 gap-4'>
                <img
                  className='h-auto w-16 md:w-28 rounded-sm shadow-md'
                  src={`/flags/${country.slug}.png`}
                  alt={country.slug}
                />
                <h1 className='text-xl md:text-4xl font-bold tracking-tight text-white'>
                  {country.name_rs}
                </h1>
              </div>

              <h3 className='bg-zinc-500 py-1 px-2 rounded-sm w-full'>
                Vizni režim
              </h3>

              <div className='flex flex-col md:flex-row justify-between w-full gap-2 pb-2 border-solid border-b border-zinc-700'>
                <div className='opacity-60'>Diplomatski i službeni pasoši:</div>
                <div
                  className={`md:max-w-[60%] md:text-right font-medium p-1 rounded-sm ${
                    country.diplomatic.toLocaleLowerCase().includes('nije')
                      ? 'bg-green-800'
                      : 'bg-red-500'
                  }`}
                >
                  {country.diplomatic}
                </div>
              </div>

              <div
                className={
                  'flex flex-col md:flex-row justify-between w-full gap-2 pb-2'
                }
              >
                <div className='opacity-60'>Obični pasoši:</div>
                <div
                  className={`md:max-w-[60%] md:text-right font-medium p-1 rounded-sm ${
                    country.national.toLocaleLowerCase().includes('nije')
                      ? 'bg-green-800'
                      : 'bg-red-500'
                  }`}
                >
                  {country.national}
                </div>
              </div>

              <h3 className='bg-zinc-500 py-1 px-2 rounded-sm w-full'>
                Dodatne informacije
              </h3>

              <div className='flex flex-col md:flex-row justify-between w-full gap-2 pb-2 border-solid border-b border-zinc-700'>
                <div className='opacity-60'>Glavni Grad</div>
                <div className='md:max-w-[60%] md:text-right font-medium'>
                  {country.capital_rs}
                </div>
              </div>

              <div className='opacity-60'>
                Prosečna godišnja temperatura u glavnom gradu:
              </div>

              <div className='overflow-x-auto relative w-full'>
                <table className='w-full text-sm text-left'>
                  <tbody>
                    <tr>
                      {Object.keys(country.average_temperature_by_month).map(
                        (monthName, index) => (
                          <td
                            key={index}
                            className='py-1 text-center border border-zinc-700 min-w-[4rem] md:min-w-0'
                          >
                            {monthName}
                          </td>
                        )
                      )}
                    </tr>
                    <tr>
                      {Object.values(country.average_temperature_by_month).map(
                        (temperatueValue, index) => (
                          <td
                            key={index}
                            className='py-1 text-center border border-zinc-700 text-gray-700 min-w-[4rem] md:min-w-0'
                            style={temperatureColor(temperatueValue)}
                          >
                            {temperatueValue}
                          </td>
                        )
                      )}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='flex justify-between items-center w-full md:hidden'>
                <span className='opacity-60 text-xs'>
                  * Prevucite tabelu da vidite ostatak
                </span>
                <span>→</span>
              </div>

              {useWeatherAPI(
                country.latitude,
                country.longitude,
                Intl.DateTimeFormat().resolvedOptions().timeZone
              )}
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}
