import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import EventTask from "../EventTask/EventTask";
import "./Events.css";

const Events = () => {
  const [event, setEvent] = useState([]);
  const history = useHistory();

  const handleClick = (id) =>{
    
    history.push(`/register/${id}`)
  }
  useEffect(() => {
    fetch("http://localhost:5000/events")
      .then(res => res.json())
      .then(data => setEvent(data))
     /* .catch(error => {
        console.error('Error:', error);
      }) */
  },[]);

  return (
    <div className="event">
      <div className="row my-5">
        {event.map(task => 
          <EventTask task={task} key={task._id} handleClick={handleClick}></EventTask>
        )}
      </div>
    </div>
  );
};

export default Events;
