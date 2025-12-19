import { Button } from "@/components/Button";

import { Spinner } from "@/shared/Spinner";

import type { LoadMoreButtonProps } from "./LoadMoreButton.types";

const LoadMoreButton = ({
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
}: LoadMoreButtonProps) => {
  if (!hasNextPage) return;

  return (
    <Button
      className="mx-auto mt-4"
      asChild={isFetchingNextPage}
      onClick={() => !isFetchingNextPage && fetchNextPage()}
    >
      {isFetchingNextPage ? (
        <div>
          Loading <Spinner size="sm" />
        </div>
      ) : (
        "Load More"
      )}
    </Button>
  );
};

export default LoadMoreButton;
