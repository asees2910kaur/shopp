import React from 'react';
import Hero from "../Components/Hero/Hero";
import Popular from '../Components/Popular/Popular';
import Offers from '../Components/Offers/offers';
import NewCollection from '../Components/NewCollection/NewCollection';
import NewsLetter from '../Components/NewsLetter/NewsLetter';



export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}