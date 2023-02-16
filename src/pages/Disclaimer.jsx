import React from 'react';

export default function Disclaimer() {
  return (
    <React.Fragment>
      <div className='container mx-auto p-6 text-xl'>
        <div className='pb-6'>
          Cilj ovog vebsajta/aplikacije bila je vežba određene veb tehnologije.
          Imajući to u vidu, informacije na sajtu koje se tiču{' '}
          <span className='font-bold'>
            viznog režima, ne treba posmatrati kao validne
          </span>{' '}
          jer se podaci ne osvežavaju regularno.
          <br />
        </div>
        <div className='pb-6'>
          Za najsvežije informacije u vezi sa viznim režimom Republike Srbije,
          posetite{' '}
          <a
            href='https://www.mfa.gov.rs/lat/gradjani/putovanje-u-inostranstvo/vize-i-informacije-o-drzavama'
            target='_blank'
            className='underline underline-offset-2 text-blue-400 hover:text-blue-300'
          >
            sajt Ministarstva Spoljnih Poslova Rebulike Srbije
          </a>
          .
        </div>
        <div>
          Ostali izvori:
          <ul className='pl-5 mt-2 space-y-1 list-disc'>
            <li>Prosečne mesečne temperature:</li>
            <ul className='pl-5 mt-2 space-y-1 list-disc list-inside'>
              <li>
                <a
                  href='https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature'
                  target='_blank'
                  className='underline underline-offset-2 text-blue-400 hover:text-blue-300'
                >
                  Wikipedia
                </a>
              </li>
              <li>
                <a
                  href='https://www.climatestotravel.com/'
                  target='_blank'
                  className='underline underline-offset-2 text-blue-400 hover:text-blue-300'
                >
                  Climates to Travel
                </a>
              </li>
            </ul>
            <li>Trenutno vreme API:</li>
            <ul className='pl-5 mt-2 space-y-1 list-disc list-inside'>
              <li>
                <a
                  href='https://open-meteo.com/'
                  target='_blank'
                  className='underline underline-offset-2 text-blue-400 hover:text-blue-300'
                >
                  Open Meteo
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
