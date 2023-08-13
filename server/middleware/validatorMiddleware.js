export const validator = (schema) => {
  return async function (req, res, next) {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error) {
      if (!error.isJoi) return next(new Error("Something went wrong"));
      res.status(422)
      next(new Error(error.message));
    }
  };
};
