import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const RegisteredList = () => {
  const [registeredList, setRegisteredList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allRegisteredList")
      .then((res) => res.json())
      .then((result) => {
        setRegisteredList(result);
      });
  }, []);
  return (
    <div className="row mx-5 my-3">
      <div className="col-md-2">
        <div>
          <Link to="/">
            <img
              className="img-logo mb-4"
              src="https://i.ibb.co/GCp0kyB/logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="mb-2">
          <a href="/admin">Admin</a>
        </div>
        <div className="mb-2">
          <a href="/registeredList">Volunteer Register List</a>
        </div>
      </div>
      <div className="col-md-1"></div>
      <div className="col-md-9">
        <h2 className="mb-5">Volunteer Register List</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email ID</th>
              <th>Registration Date</th>
              <th>Volunteer List</th>
            </tr>
          </thead>
          <tbody>
            {registeredList.map((item) => (
              <tr id={item._id}>
                <th>{item.name}</th>
                <td>{item.email}</td>
                <td>{item.date}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredList;
