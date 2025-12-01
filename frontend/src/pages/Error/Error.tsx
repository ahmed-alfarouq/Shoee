import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

const Error = () => {
  const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => (
    <section className="error-page container">
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
      </div>
    </section>
  );

  return <ErrorBoundary FallbackComponent={FallbackComponent}></ErrorBoundary>;
};

export default Error;
