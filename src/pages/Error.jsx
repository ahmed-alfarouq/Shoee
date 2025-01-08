import React from "react";

function Error({ message }) {
  return (
    <div>
      <h1 className="title">An Error Happened!</h1>
      <p>{message}</p>
    </div>
  );
}

export default Error;
