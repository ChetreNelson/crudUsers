import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dataOfId, setDataOfId] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const getApiDataFromId = async () => {
    try {
      const value = await axios.get("http://localhost:3001/students/" + id);
      setDataOfId(value.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/students/" + id, dataOfId)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getApiDataFromId();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-slate-300">
      <div className="w-1/2  rounded-xl bg-white shadow-lg p-2">
        <h1 className="text-2xl font-bold text-center">Update Form</h1>
        <form onSubmit={handleSubmit} className="m-4 p-2">
          <div className="mb-4">
            <label htmlFor="name" className="block">
              Name:
            </label>
            <input
              value={dataOfId.name}
              onChange={(e) =>
                setDataOfId({ ...dataOfId, name: e.target.value })
              }
              type="text"
              name="name"
              placeholder="Enter Name"
              className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block">
              Email:
            </label>
            <input
              value={dataOfId.email}
              onChange={(e) =>
                setDataOfId({ ...dataOfId, email: e.target.value })
              }
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
              value={dataOfId.phone}
              onChange={(e) =>
                setDataOfId({ ...dataOfId, phone: e.target.value })
              }
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

export default Update;
