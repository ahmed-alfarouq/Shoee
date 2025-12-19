import errorHandler from "./errorHandler";

/**
 * A higher-order function that wraps an asynchronous function to catch and handle errors
 * @params fn - The function to be wrapped
 */
const asyncCatch = async <T>(
  fn: () => Promise<T>
): Promise<[Error | null, T | null]> => {
  try {
    const data = await fn();
    return Promise.resolve([null, data]);
  } catch (error) {
    const err = errorHandler(error);
    return Promise.resolve([err, null]);
  }
};

export default asyncCatch;
