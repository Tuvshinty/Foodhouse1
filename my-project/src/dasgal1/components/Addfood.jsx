import React from "react";
import { dishes } from "../data/data";
const Addfood = ({ closeFood, addOrder }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-[90%] max-w-6xl rounded-3xl bg-white p-8 shadow-2xl">
        <button
          onClick={closeFood}
          className="absolute top-6 right-5 rounded-full bg-orange-100 px-4 py-1 text-sm text-orange-600"
        >
          Close
        </button>
        <p className="text-xs font-semibold tracking-widest text-orange-500">
          ADD FOOD
        </p>
        <h2 className="mt-2 text-3xl font-bold text-gray-900">
          Choose from Popular dishes
        </h2>
        <p className="mt-3 max-w-2xl text-gray-500">
          Pick one of the available dishes and add it to your orders
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {dishes.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden border"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex flex-col">
                    <h1>{item.name}</h1>
                    <h3 className="font-semibold">
                      {item.description}
                    </h3>
                  </div>
                  <span className="text-orange-500 font-bold">
                    {item.price}
                  </span>
                </div>
                <button
                  onClick={() => addOrder(item)}
                  className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-xl"
                >
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Addfood;