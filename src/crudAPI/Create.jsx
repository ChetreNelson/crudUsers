import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Create = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [values, setValues] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://project-data-e42e.onrender.com/students/${values.id}`)
      .then((res) => {
        // If ID exists, show error
        setError("ID already exists");
      })
      .catch(() => {
        // If ID doesn't exist, submit the form
        axios
          .post("https://project-data-e42e.onrender.com/students", values)
          .then(() => {
            navigate("/");
          })
          .catch((err) => console.log(err));
      });
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen font-abc bg-slate-300">
      <div className="w-1/2  rounded-xl bg-white shadow-lg p-2">
        <h1 className="text-2xl font-bold text-center">FillUp Form</h1>
        <form onSubmit={handleSubmit} className="m-4 p-2">
          <div className="mb-4">
            <label htmlFor="name" className="block">
              Id:
            </label>
            <input
              onChange={(e) => setValues({ ...values, id: e.target.value })}
              type="text"
              name="name"
              placeholder="Enter Name"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            />

            {error && <p className="text-red-500">{error}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block">
              Name:
            </label>
            <input
              onChange={(e) => {
                setValues({ ...values, name: e.target.value });
                setError(null);
              }}
              type="text"
              name="name"
              placeholder="Enter Name"
              className="border border-gray-300 rounded-md 
              px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block">
              Email:
            </label>
            <input
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              type="email"
              name="email"
              placeholder="Enter Email"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block">
              Phone:
            </label>
            <input
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
              type="text"
              name="phone"
              placeholder="Enter Phone"
              className="border border-gray-300 rounded-md px-3 py-2
               w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            to={"/"}
            type="submit"
            className="border border-green-500 bg-green-500 text-white
          rounded-lg px-2 py-2 mr-2"
          >
            Submit
          </button>
          <Link
            to={"/"}
            className="border border-black bg-black text-white
          rounded-lg px-2 py-2"
          >
            Back
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Create;
