import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"; // Import the Navbar component

const Home = () => {
  const hasCreatedMenu = false; // Replace this with your logic

  return (
    <div>
      <Navbar /> {/* Include the Navbar here */}
      <div className="flex flex-col items-center mt-8">
        <div className="p-4 bg-white shadow-lg rounded-md m-2">
          <Link to={hasCreatedMenu ? "/edit-menu" : "/create-menu"}>
            <div className="group relative w-36 h-36 rounded-full border-2 border-indigo-500 flex justify-center items-center transition transform hover:scale-110">
              {hasCreatedMenu ? (
                <i className="text-5xl text-indigo-600 fas fa-pen"></i>
              ) : (
                <i className="text-5xl text-indigo-600 fas fa-plus"></i>
              )}
            </div>
            <p className="text-indigo-500 mt-2 text-lg font-semibold">{hasCreatedMenu ? "Edit Menu" : "Create Menu"}</p>
          </Link>
        </div>

        <div className="mt-6 space-x-4 flex">
          <Link to="/generate-qr">
            <button className="w-20 h-20 p-3 rounded-md bg-blue-400 hover:bg-blue-500 active:bg-blue-600 text-white flex flex-col items-center justify-center">
              <i className="text-3xl fas fa-qrcode"></i>
              <span className="mt-1 text-lg font-semibold">Generate</span>
            </button>
          </Link>

          <button className="w-20 h-20 p-3 rounded-md bg-green-400 hover:bg-green-500 active:bg-green-600 text-white flex flex-col items-center justify-center">
            <i className="text-3xl fas fa-save"></i>
            <span className="mt-1 text-lg font-semibold">Save</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
