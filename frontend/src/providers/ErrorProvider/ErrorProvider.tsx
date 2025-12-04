import { Outlet } from "react-router-dom";

import styles from "./ErrorProvider.module.scss";

import { Button } from "@/components/Button";

import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

const CustomErrorBoundry = () => {
  const FallbackComponent = ({ error, resetErrorBoundary }: FallbackProps) => (
    <main className={`${styles.error_page} container`}>
      <h1 className={styles.title}>An Error Happened!</h1>
      <p className={styles.description}>
        {error && error.message.length > 0
          ? error.message
          : " This issue may sometimes occur due to storage issues. Please try clearing the storage first."}
      </p>

      {resetErrorBoundary && (
        <Button size="lg" className="mx-auto" onClick={resetErrorBoundary}>
          Try again
        </Button>
      )}
    </main>
  );

  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <Outlet />
    </ErrorBoundary>
  );
};

export default CustomErrorBoundry;
