import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../App";
import Navbar from "../../Home/Navbar/Navbar";
import SubscribedEvents from "../SubscribedEvents/SubscribedEvents";
import "./RegEvents.css";

const RegEvents = () => {
  const [loggedInUser] = useContext(userContext);
  const [userEvents, setUserEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/subscribedEvents?email=' + loggedInUser.email)
      .then(res => res.json())
      .then(data => setUserEvents(data));
  }, [loggedInUser.email]);

 const handleClick = (id) =>{
   console.log(id)
 }
  return (
    <div className="reg-event">
      <div className="mx-5">
        <Navbar />

        <div className="row mt-5 ml-5">
          {userEvents.map((event) => (
            <SubscribedEvents key={event._id} event={event} handleClick={handleClick}></SubscribedEvents>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegEvents;
