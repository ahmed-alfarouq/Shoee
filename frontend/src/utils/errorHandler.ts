import { AxiosError } from "axios";

const errorHandler = (error: unknown): Error => {
  if (error instanceof Error) {
    return error;
  }

  if (error instanceof AxiosError) {
    if (
      error.response &&
      error.response.data &&
      typeof error.response.data === "string"
    ) {
      return new Error(error.response.data, {
        cause: error.cause,
      });
    }

    if (
      error.response &&
      error.response.data &&
      typeof error.response.data === "object" &&
      "msg" in error.response.data &&
      typeof error.response.data.msg === "string"
    ) {
      return new Error(error.response.data.msg, {
        cause: error.cause,
      });
    }
  }

  return new Error("An unknown error occurred");
};

export default errorHandler;
