import * as React from 'react';
import Country from './pages/Country';
import CountryList from './pages/CountryList';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Disclaimer from './pages/Disclaimer';

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<CountryList />} />
        <Route path='/countries/:countrySlugRs' element={<Country />} />
        <Route path='/disclaimer' element={<Disclaimer />} />
      </Routes>
    </>
  );
}
