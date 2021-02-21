import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AddEvent.css";

const AddEvent = () => {
  const [addEvent, setAddEvent] = useState({});
  const [file, setFile] = useState(null);
  // const [message, setMessage] = useState("");

  const handleBlur = (e) => {
    const newEvent = { ...addEvent };
    newEvent[e.target.name] = e.target.value;
    setAddEvent(newEvent);
  };
  const handleChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", addEvent.title);
    formData.append("description", addEvent.description);
    formData.append("date", addEvent.date);

    fetch("http://localhost:5000/addEvent", {
      method: "POST",
      body: formData,
    });
  };
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
          <a href="/admin">Add Event</a>
          <br />
        </div>
        <div>
          <a href="/registeredList">Volunteer register list</a>
        </div>
      </div>
      <div className="col-md-10">
        <div>
          <h3 className="pl-5">Add Event ...</h3>
        </div>
        <div className="event-bg p-5">
          <form className="form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Event title</label>
                  <input
                    onBlur={handleBlur}
                    type="text"
                    name="title"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter title"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1">
                    Enter description
                  </label>
                  <textarea
                    onBlur={handleBlur}
                    class="form-control"
                    name="description"
                    placeholder="enter description"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="col-md-6">
                <div class="form-group">
                  <label for="exampleInputEmail1">Event date</label>
                  <input
                    onBlur={handleBlur}
                    type="date"
                    name="date"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter date"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Banner</label>
                  <br />
                  <input
                    onChange={handleChange}
                    type="file"
                    name="file"
                    id="exampleInputEmail1"
                    placeholder="select image"
                  />
                </div>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
