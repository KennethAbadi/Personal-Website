import React from "react";

const about = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-slate-900 text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" flex-col justify-center items-center w-5/6">
         <div className="max-w-lb h-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-center text-4xl">
              <p>
                About
              </p>
            </div>
            <div>
              <p>
                I am a third year student currently studying in the   <b><a class="underline-link" href="https://www.ubc.ca" target="_blank">University of British Columbia</a></b>
                {" "}currently searching for a Co-op or internship position!
              </p>
              <p>
                <br></br>
                I am a third year student studying Computer Science in the University of British Columbia currently looking for a coop/internship experience.
                As an aspiring software engineer, I strive to seek out new opportunities by exposing myself to new languages or delving deeper into ones I have had experience with.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default about;