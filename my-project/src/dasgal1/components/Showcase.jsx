import React from "react";

const Showcase = ({ open }) => {
  return (
    <div id="">
      <div className="w-full bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <p className="text-orange-600 font-semibold mb-3">
              Fresh and Tasty
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Enjoy delicous meals made with fresh ingredients
            </h1>
            <p className="text-gray-600 mb-6 text-lg">
              Experience warm service, beautiful dishes, and comfortable place
              for family and friends
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => open()}
                className="bg-orange-600 text-white px-6 py-3 rounded-xl"
              >
                Order now
              </button>
              <button className="bg-gray-100 px-6 py-3 rounded-xl">
                View Menu
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"
              alt="students learning"
              className="rounded-2xl w-full max-w-md"
            />
          </div>
        </div>
      </div>
      );
    </div>
  );
};

export default Showcase;
