import { Suspense, type ComponentType } from "react";

import { PageLoader } from "@features/PageLoader";

const LazyLoad = <T extends object>(Component: ComponentType<T>, props?: T) => {
  return () => (
    <Suspense fallback={<PageLoader />}>
      <Component {...(props as T)} />
    </Suspense>
  );
};

export default LazyLoad;
