import React, { useState } from "react";
import { dishes } from "../data/data";
import Addfood from "../components/Addfood";

const editFields = [
  { label: "Full Name", type: "text" },
  { label: "Email", type: "email" },
  { label: "Phone Number", type: "tel" },
  { label: "Guests", type: "number" },
  { label: "Date", type: "date" },
  { label: "Password", type: "password" },
];

const AuthSection = ({ states, closes, user, onUpdateUser }) => {
  const [openFood, setOpenFood] = useState(false);
  const [orders, setOrders] = useState([]);
  const [editOpen, setEditOpen] = useState(false);
  const [editForm, setEditForm] = useState({});

  if (!states) return null;

  const handleAddOrder = (food) => {
    setOrders([...orders, food]);
    setOpenFood(false);
  };

  const handleCloseOrder = (indexToRemove) => {
    setOrders(orders.filter((_, i) => i !== indexToRemove));
  };

  const openEdit = () => {
    setEditForm({ ...user });
    setEditOpen(true);
  };

  const handleEditChange = (label, value) => {
    setEditForm((prev) => ({ ...prev, [label]: value }));
  };

  const handleSave = () => {
    onUpdateUser(editForm);
    setEditOpen(false);
  };

  return (
    <div className="w-full min-h-screen bg-[#fdf6ee] px-6 py-10">
      {openFood && (
        <Addfood
          closeFood={() => setOpenFood(false)}
          addOrder={handleAddOrder}
        />
      )}

      {editOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white w-full max-w-2xl rounded-3xl p-6 max-h-[90vh] overflow-y-auto shadow-xl">
            <div className="flex justify-between items-start gap-4">
              <div>
                <p className="text-sm font-semibold uppercase text-orange-500">
                  ACCOUNT
                </p>
                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  Update your dining profile
                </h2>
                <p className="mt-3 text-sm text-gray-500">
                  Keep your reservation details and favorite order preferences
                  together in one place.
                </p>
              </div>
              <button
                onClick={() => setEditOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>

            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {editFields.map((field) => (
                <label key={field.label} className="block">
                  <span className="text-sm font-semibold text-gray-700">
                    {field.label}
                  </span>
                  <input
                    type={field.type}
                    value={editForm[field.label] || ""}
                    onChange={(e) =>
                      handleEditChange(field.label, e.target.value)
                    }
                    className="w-full mt-2 rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-500"
                  />
                </label>
              ))}
            </div>

            <label className="block mt-4">
              <span className="text-sm font-semibold text-gray-700">
                Favorite Dish
              </span>
              <textarea
                value={editForm["Favorite Dish"] || ""}
                onChange={(e) =>
                  handleEditChange("Favorite Dish", e.target.value)
                }
                className="w-full mt-2 rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-orange-500"
                rows={3}
              />
            </label>

            <button
              onClick={handleSave}
              className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold"
            >
              Save Changes
            </button>
          </div>
        </div>
      )}

      <div className="max-w-6xl mx-auto">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest text-orange-500">
              MY ORDERS
            </p>
            <h2 className="mt-2 text-4xl font-bold text-gray-900">
              Your recent food orders
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl">
              Review your current and previous orders with quick status updates.
            </p>
          </div>
          <div className="flex flex-row gap-5">
            <button
              onClick={() => setOpenFood(true)}
              className="bg-orange-100 hover:bg-orange-200 text-orange-600 px-6 py-3 rounded-xl shadow"
            >
              + Add Food
            </button>
            <button
              onClick={closes}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl shadow"
            >
              Back to Home
            </button>
          </div>
        </div>

        {user && (
          <div className="mt-10 bg-white rounded-2xl p-6 shadow-md border">
            <div className="flex justify-between items-start flex-wrap gap-4">
              <div>
                <p className="text-xs font-semibold tracking-widest text-orange-500">
                  ACCOUNT OVERVIEW
                </p>
                <h3 className="mt-2 text-3xl font-bold text-gray-900">
                  {user["Full Name"] || "Guest User"}
                </h3>
                <p className="mt-2 text-gray-500 max-w-xl">
                  Keep your reservation details and favorite order preferences
                  together in one place.
                </p>
              </div>
              <button
                onClick={openEdit}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl"
              >
                Edit Account
              </button>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-orange-50 rounded-xl p-4">
                <p className="text-xs font-semibold text-orange-500">EMAIL</p>
                <p className="mt-1 font-semibold text-gray-900">
                  {user.Email || "—"}
                </p>
              </div>
              <div className="bg-orange-50 rounded-xl p-4">
                <p className="text-xs font-semibold text-orange-500">PHONE</p>
                <p className="mt-1 font-semibold text-gray-900">
                  {user["Phone Number"] || "—"}
                </p>
              </div>
              <div className="bg-orange-50 rounded-xl p-4">
                <p className="text-xs font-semibold text-orange-500">GUESTS</p>
                <p className="mt-1 font-semibold text-gray-900">
                  {user.Guests || "—"}
                </p>
              </div>
              <div className="bg-orange-50 rounded-xl p-4">
                <p className="text-xs font-semibold text-orange-500">
                  FAVORITE DISH
                </p>
                <p className="mt-1 font-semibold text-gray-900">
                  {user["Favorite Dish"] || "—"}
                </p>
              </div>
            </div>
          </div>
        )}

        {orders.length === 0 ? (
          <div className="mt-10 bg-white rounded-2xl p-10 text-center shadow-md border">
            <h3 className="text-2xl font-bold text-gray-900">
              No food added yet
            </h3>
            <p className="mt-2 text-gray-500">
              Press the + Add Food button to add dishes to your order list.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {orders.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border"
              >
                <div className="flex justify-between items-center">
                  <p className="text-orange-500 font-medium">Order #{index + 1}</p>
                  <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                    Preparing
                  </span>
                </div>
                <h3 className="text-xl font-bold mt-2">{item.name}</h3>
                <p className="text-gray-500 mt-2">{item.description}</p>
                <div className="mt-4 bg-orange-50 rounded-xl px-4 py-2 font-semibold">
                  {item.price}
                </div>
                <button
                  onClick={() => handleCloseOrder(index)}
                  className="px-4 py-2 bg-orange-500 rounded-lg w-full mt-5 text-amber-50"
                >
                  Close
                </button>
              </div>
            ))}
          </div>
        )}

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-2">Popular dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {dishes.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 flex justify-between items-center">
                  <div className="flex flex-col">
                    <h1>{item.name}</h1>
                    <h3 className="font-semibold">{item.description}</h3>
                  </div>
                  <span className="text-orange-500 font-bold">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSection;
