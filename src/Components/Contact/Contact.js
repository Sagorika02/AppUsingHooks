import React from "react";

function Contact(props) {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.contactitem.name}</h5>
          <p className="card-title">{props.contactitem.email}</p>
          <p className="card-title">{props.contactitem.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
