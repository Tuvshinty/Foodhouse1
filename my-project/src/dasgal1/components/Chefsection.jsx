import React from "react";
import { chefInfo } from "../data/data";

const Chefsection = ({ openChef }) => {
  return (
    <div className="w-full py-12" id="About">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-center">
          {chefInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow flex flex-row gap-15"
            >
              <img
                src={item.image}
                alt={item.title}
                className="rounded-3xl w-150"
              />
              <div className="flex items-center">
                <div className="flex flex-col">
                  <p className="text-orange-600 font-semibold mb-3">
                    
                  </p>
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>
                  <button
                    onClick={openChef}
                    className="bg-orange-600 text-white px-6 py-3 rounded-xl"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Chefsection;