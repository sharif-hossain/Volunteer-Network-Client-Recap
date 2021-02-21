import React, { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { userContext } from "../../../App";
import "./Register.css";

const Register = () => {
  const { id } = useParams();
  const history = useHistory();
  const [loggedInUser] = useContext(userContext);
  const [event, setEvent] = useState({});
  //   const [volunteer, setVolunteer] = useState({
  //     fullName: '',
  //     email: '',
  //     date: '',
  //     description: '',
  //     eventName: '',
  //     eventImage: ''
  //   });
  // const [eventName, setEventName] = useState('');
  // const [eventImage, setEventImage] = useState('');
  // const [date, setDate] = useState('');
  // let history = useHistory();

  // const handleChange = (e) =>{
  //     const volunteerInfo = {...volunteer}
  //     volunteerInfo[e.target.name] = e.target.value;
  //     setVolunteer(volunteerInfo);
  // }
  useEffect(() => {
    fetch(`http://localhost:5000/event/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
        // setEventName(data.title);
        // setEventImage(data.image);
      });
  }, [id]);
 
  const handleChange = (e) => {
    const newEvent = { ...event };
    newEvent[e.target.name] = e.target.value;
    setEvent(newEvent);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", loggedInUser.displayName);
    formData.append("email", loggedInUser.email);
    formData.append("date", event.date);
    formData.append("description", event.description);
    formData.append("title", event.title);
    formData.append("image", event.image.img);

    fetch("http://localhost:5000/register", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          history.push("/regEvents");
        }
      });
  };
  console.log(event);
  return (
    <div className="row reg-bg">
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <div className="text-center">
          <img
            className="reg-img my-4"
            src="https://i.ibb.co/GCp0kyB/logo.png"
            alt=""
          />
        </div>

        <div className="form-design">
          <h3 className="my-4">Register as a volunteer</h3>
          <form className="form-border" onSubmit={handleSubmit}>
            <div class="form-group">
              <input
                type="text"
                name="name"
                // onChange={handleChange}
                value={loggedInUser.displayName}
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Enter Full Name"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="email"
                // onChange={handleChange}
                value={loggedInUser.email}
                class="form-control"
                id="exampleInputPassword1"
                placeholder="User or Email"
              />
            </div>
            <div class="form-group">
              <input
                type="date"
                name="date"
                onChange={handleChange}
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Date"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="description"
                onChange={handleChange}
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Description"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="text"
                name="title"
                // onChange={handleChange}
                value={event.title}
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Organize books at the library"
                required
              />
            </div>
            <button type="submit" class="btn btn-primary reg-btn">
              Registration
            </button>
          </form>
        </div>
      </div>
      <div className="col-md-4"></div>
    </div>
  );
};

export default Register;
