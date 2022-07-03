const validateResources = (schema) => {
  return (req, res, next) => {
    schema.parse({
      body: req.body,
    });
    next();
  };
};

module.exports = validateResources;
