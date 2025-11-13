const handleError = (error, req, res, next) => {
    let { statusCode = 500, message = 'Internal Server Error', errorCode, stack } = error;

    if (error.isOperational) {
        return res.status(statusCode).json({ status: error.status, message, errorCode, stack });
    }

    const production = process.env.NODE_ENV === "production";

    // Programming or Unkown error
    if (production) return res.status(statusCode).json({ status: "error", message: "Something went wrong!", errorCode: null, stack: null })

    return res.status(statusCode).json({
        status: error.status || 'error',
        message: error.message,
        errorCode: null,
        stack: error.stack,
    });

};

export default handleError;
