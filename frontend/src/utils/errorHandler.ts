import { AxiosError } from "axios";

const errorHandler = (error: unknown): Error => {
  if (error instanceof AxiosError) {
    console.log(error);
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

    if (
      error.response &&
      error.response.data &&
      typeof error.response.data === "object" &&
      "errors" in error.response.data &&
      error.response.data.errors.length
    ) {
      return new Error(error.response.data.errors[0].msg, {
        cause: error.cause,
      });
    }

    if (
      error.response &&
      error.response.data &&
      typeof error.response.data === "string"
    ) {
      return new Error(error.response.data, {
        cause: error.cause,
      });
    }

    if (error.message) {
      return new Error(error.message, {
        cause: error.cause,
      });
    }
  }

  if (error instanceof Error) {
    return error;
  }

  return new Error("An unknown error occurred");
};

export default errorHandler;
