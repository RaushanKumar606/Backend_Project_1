/*
useing this code promise
*/

const asyncHandler = (RequestHandler) => {
  (req, res, next) => {
    Promise.resolve(RequestHandler(req, res, next)).catch((err) => next(err));
  };
};

export { asyncHandler };

/*
using this code  middlewarev  (with out promise )

const


const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(err.code || 4000).json({ success: false, message: err,message });
  }
};
*/
