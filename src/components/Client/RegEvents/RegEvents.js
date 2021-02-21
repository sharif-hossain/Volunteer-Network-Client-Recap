import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../App";
import Navbar from "../../Home/Navbar/Navbar";
import SubscribedEvents from "../SubscribedEvents/SubscribedEvents";
import "./RegEvents.css";

const RegEvents = () => {
  const [loggedInUser] = useContext(userContext);
  const [userEvents, setUserEvents] = useState([]);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/subscribedEvents?email=' + loggedInUser.email)
      .then(res => res.json())
      .then(data => {
        setUserEvents(data);
        setIsDeleted(false);
      });
  }, [loggedInUser.email, isDeleted]);

 const handleDelete = (id) =>{
   fetch(`http://localhost:5000/delete/${id}`, {
     method: 'DELETE',
   })
   .then(res => res.json())
   .then(result =>{
     if(result)
      {setIsDeleted(true);}
   })
 }
  return (
    <div className="reg-event">
      <div className="mx-5">
        <Navbar />

        <div className="row mt-5 ml-5">
          {userEvents.map((event) => (
            <SubscribedEvents key={event._id} event={event} handleDelete={handleDelete}></SubscribedEvents>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegEvents;
