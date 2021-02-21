import React from "react";
import './SubscribedEvents.css';

const SubscribedEvents = ({ event, handleClick}) => {
  console.log(event);
  return (
    <div className="col-md-5 d-flex user-event">
      <div>
        <img className="event-img img-fluid" src={`data:image/png;base64,${event.image}`} alt="" />
      </div>  
      <div className="px-3">
        <h5>{event.title}</h5>
        <p>{(new Date(event.date)).toDateString('dd/MM/yyyy')}</p>
        <button onClick={()=>handleClick(event._id)} className="btn btn-secondary cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default SubscribedEvents;
