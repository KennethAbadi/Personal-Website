import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

import { Link } from "react-scroll"; 

const Home = () => {
  return (
    <div
    name="home"
    className="h-screen w-full bg-slate-900"
  >
    <div className="max-w-screen-md mx-auto h-full ">
      <div className="flex flex-col justify-center h-full">
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          Hello!
        </h2>
        <h2 className="text-4xl sm:text-4xl text-white">
          <br></br>
           I'm <b>Kenneth Abadi</b>, a Third-Year Computer Science Student!
           I've dabbled in front-end, back-end and also in creating games.
        </h2>
        <div>
        </div>
      </div>
    </div>
  </div>
  );
};
export default Home;