import React from "react";

function Error({ error, resetErrorBoundary, purgeStorage }) {
  return (
    <main className="error-page">
      <div className="container">
        <h1 className="title">An Error Happened!</h1>
        <p className="description">
          {error && error.message.length > 0
            ? error.message
            : " This issue may sometimes occur due to storage issues. Please try clearing the storage first."}
        </p>
        <div className="btns">
          {resetErrorBoundary && (
            <button className="btn" onClick={resetErrorBoundary}>
              Try again
            </button>
          )}

          {(!error || error.message.length <= 0) && (
            <button className="btn" onClick={purgeStorage}>
              Clear Storage
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

export default Error;
