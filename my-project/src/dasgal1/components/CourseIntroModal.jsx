import React from "react";
import { menuDetails } from "../data/data";
const CourseIntroModal = ({ state, close }) => {
  if (!state) {
    return null;
  }
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-[90%] max-w-6xl rounded-3xl bg-white p-8 shadow-2xl">
        <button
          onClick={close}
          className="absolute top-6 right-5 rounded-full bg-orange-100 px-4 py-1 text-sm text-orange-600"
        >
          Close
        </button>
        <p className="text-xs font-semibold tracking-widest text-orange-500">
          FEATURED MENU
        </p>
        <h2 className="mt-2 text-3xl font-bold text-gray-900">
          Take a closer look at today's popular dishes
        </h2>
        <p className="mt-3 max-w-2xl text-gray-500">
          This demo menu overview gives customers a quick look at the
          restaurant's featured meals before ordering.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {menuDetails.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.name}
                </h3>
                <span className="font-semibold text-orange-500">
                  {item.price}
                </span>
              </div>
              <p className="mt-3 text-sm text-gray-500">{item.description}</p>
              <p className="mt-4 text-sm text-gray-600">
                <span className="font-medium">Serving:</span> {item.serving}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-medium">Prep time:</span> {item.prepTime}
              </p>
              <div className="mt-4 space-y-2">
                {item.extras.map((extra, i) => (
                  <div
                    key={i}
                    className="rounded-lg bg-white px-3 py-2 text-sm text-gray-600"
                  >
                    <p>{extra}</p>
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
export default CourseIntroModal;
