import createHttpError from "http-errors";

export const validator = (schema) => {
  return async function (req, res, next) {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      if (error.isJoi) return next(createHttpError(422, { message: error.message }));
      next(createHttpError(500));
    }
  };
};
