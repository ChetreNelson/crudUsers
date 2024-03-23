import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Read = () => {
  const { id } = useParams();
  const [dataOfId, setDataOfId] = useState([]);

  const getApiDataFromId = async () => {
    try {
      const value = await axios.get("http://localhost:3001/students/" + id);
      setDataOfId(value.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiDataFromId();
  }, []);
  return (
    <div
      className="flex flex-col justify-center items-center
     w-full h-screen bg-slate-300"
    >
      <div className="w-1/2   flex flex-col rounded-xl bg-white shadow-lg p-2">
        <h1 className="text-center text-2xl font-bold ">Data of Users</h1>
        <div className="px-2 mb-2 ">
          <strong>Name: {dataOfId.name}</strong>
        </div>
        <div className="px-2 mb-2">
          <strong>Email: {dataOfId.email}</strong>
        </div>
        <div className="px-2 mb-2">
          <strong>Phone: {dataOfId.phone}</strong>
        </div>
        <div className="flex px-2 mb-2 gap-2">
          <Link
            to={`/update/${id}`}
            className="border border-blue-600 bg-blue-600 rounded-lg px-2 py-2 "
          >
            Edit
          </Link>
          <Link
            to={"/"}
            className="border border-black bg-black text-white rounded-lg px-2 py-2"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Read;
