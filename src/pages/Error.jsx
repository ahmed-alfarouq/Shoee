import React from "react";

function Error({ message }) {
  return (
    <main className="error-page">
      <div className="container">
        <h1 className="title">An Error Happened!</h1>
        <p className="description">{message}</p>
      </div>
    </main>
  );
}

export default Error;
