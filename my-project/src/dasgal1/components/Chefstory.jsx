import React from "react";
import { chefInfo } from "../data/data";

const Chefstory = ({ openes, onBack }) => {
  if (!openes) return null;

  const chef = chefInfo[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="w-full  px-8 py-4 flex items-center justify-between">
        <h1 className="text-white text-xl font-semibold">Chef Story</h1>
        <button
          onClick={onBack}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-medium transition-colors"
        >
          Back to Home
        </button>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Top label */}
        <p className="text-orange-600 font-semibold text-sm uppercase tracking-wide mb-2">
          Learn More
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{chef.title}</h2>
        <p className="text-gray-500 mb-10">
          Get to know the chef behind the kitchen and the ideas that shape each menu.
        </p>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-md p-6">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={chef.image}
              alt={chef.title}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          {/* Story content */}
          <div className="md:w-1/2 flex flex-col justify-center gap-4">
            <p className="text-orange-600 font-semibold text-sm uppercase tracking-wide">
              Chef Story
            </p>
            <h3 className="text-2xl font-bold text-gray-900 leading-snug">
              A kitchen built on warmth and quality
            </h3>
            <p className="text-gray-600 leading-relaxed">{chef.story}</p>

            {/* Philosophy list */}
            <div className="flex flex-col gap-3 mt-2">
              {chef.philosophy.map((point, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl px-4 py-3 text-gray-700 text-sm"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefstory;
