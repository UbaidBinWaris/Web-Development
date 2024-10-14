import React from 'react';

const TitlePhoto = () => {
  return (
    <div className="bg-white ">
      <div className="m-4 h-[60vh] border-2 rounded-lg bg-[#65360D] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#65360D] to-[#a36e28] opacity-70">
          <img
            src="/backgroung.jpg"
            className="w-full h-full object-cover rounded-lg mix-blend-overlay"
            alt="Background"
          />
        </div>

        <div className="relative z-10 text-white p-6">
          <div className="p-6 justify-center items-center text-center border-2">
            <h1 className="text-4xl font-bold">
              Enhance your House Beauty with Wood Furniture
            </h1>
            <p className="mt-4 text-lg">
              Upgrade your home's aesthetic appeal with our exquisite collection
              of wood furniture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitlePhoto;
