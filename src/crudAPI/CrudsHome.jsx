import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CrudsHome = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const getData = () => {
    setLoading(true);
    axios
      .get("https://project-data-e42e.onrender.com/students")
      .then((res) => {
        setData(res.data);
        console.log(res);
      })

      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("do you want to delete the record?");
    if (confirm) {
      axios
        .delete("https://project-data-e42e.onrender.com/students/" + id)
        .then((res) => {
          getData();
        });
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {isLoading && (
        <div className="flex items-center justify-center h-screen">
          <p className="text-xl font-bold">Loading...</p>
        </div>
      )}
      <div className="flex flex-col justify-center items-center w-full h-screen bg-slate-300">
        <div className="shadow-2xl shadow-slate-700 rounded-lg">
          <p className="text-2xl font-bold  ">
            List <span className="text-gray-500"> Of</span> Users
          </p>
        </div>
        <div className=" w-3/4 mb-2 flex justify-end shadow-xl">
          <Link
            to={"/create"}
            className="border border-green-500 bg-green-500  rounded-lg px-2 py-2
            "
          >
            ADD+
          </Link>
        </div>
        <div className="w-3/4  rounded-xl bg-white shadow-lg p-2">
          <table
            className="w-full text-sm text-left rtl:text-right
         text-gray-500 "
          >
            <thead className="text-2xl text-gray-700   bg-slate-400 ">
              <tr>
                <th className="border  ">ID</th>
                <th className="border ">NAME</th>
                <th className="border ">EMAIL</th>
                <th className="border ">PHONE</th>
                <th className="text-center">ACTION</th>
              </tr>
            </thead>
            <tbody>
              {data.map((values, index) => (
                <tr key={index}>
                  <td>{values.id}</td>
                  <td>{values.name}</td>
                  <td>{values.email}</td>
                  <td>{values.phone}</td>
                  <td className="text-center">
                    <Link
                      to={`/read/${values.id}`}
                      className="border border-slate-600 
                  bg-blue-500 rounded-xl text-white px-2  mt-2 mr-2 py-1"
                    >
                      Read
                    </Link>
                    <Link
                      to={`/update/${values.id}`}
                      className="border border-slate-600 
                  bg-blue-800 rounded-xl text-white px-2 mt-2 mr-2 py-1"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        handleDelete(values.id);
                      }}
                      className="border border-slate-600
                  bg-red-500 text-white rounded-xl px-2  mt-2 py-1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CrudsHome;
