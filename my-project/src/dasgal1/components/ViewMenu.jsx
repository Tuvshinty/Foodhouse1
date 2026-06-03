import React from "react";
import { menuDetails } from "../data/data";

const ViewMenu = ({ onBack}) => {
  return (
    <div className="min-h-screen bg-[#f5f0eb] px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="text-orange-500 text-sm font-semibold tracking-widest uppercase mb-2">
              View Menu
            </p>
            <h1 className="text-4xl font-bold text-gray-900">
              Explore the full menu details
            </h1>
            <p className="mt-3 text-gray-500 max-w-xl">
              Browse featured dishes with serving info, prep time, and what
              makes each plate special.
            </p>
          </div>
          <button
            onClick={onBack}
            className="bg-orange-500 hover:bg-orange-600 transition-colors text-white px-6 py-3 rounded-xl font-medium whitespace-nowrap mt-2"
          >
            Back to Home
          </button>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {menuDetails.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                <span className="bg-orange-100 text-orange-500 font-semibold px-3 py-1 rounded-full text-sm">
                  {item.price}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-4">{item.description}</p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Serving:</span> {item.serving}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <span className="font-medium">Prep time:</span> {item.prepTime}
              </p>
              <div className="space-y-2 mb-5">
                {item.extras.map((extra, i) => (
                  <div
                    key={i}
                    className="rounded-lg bg-gray-50 border border-gray-100 px-3 py-2 text-sm text-gray-600"
                  >
                    {extra}
                  </div>
                ))}
              </div> 
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewMenu;
