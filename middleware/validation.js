const validateData = (schema) => async (req, res, next) => {
  const body = req.body;
  try {
    await schema.validate(body);
    next();
  } catch (error) {
    res.send({
      status: 200,
      message: ` ${error.errors.join(",")}`,
    });
  }
};

export default validateData;
