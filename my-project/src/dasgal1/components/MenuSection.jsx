import React from "react";
import { dishes } from "../data/data";

const CourseList = () => {
  return (
    <div className="w-full bg-gray-50 py-12 px-4 " id="Menu">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-3">Popular Menu</h2>
        <p className="text-center text-gray-600 mb-10">
          Discover our most loved dishes
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {dishes.map((course, index) => (
            <div key={index} className="bg-white-700 rounded-2xl shadow p-4">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <p className="text-sm text-black-600 font-bold mb-2">
                {course.name}
              </p>
              <h3 className="text-xl font-bold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
