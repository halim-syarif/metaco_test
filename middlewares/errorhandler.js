const errorHandler = (err, req, res, next) => {
  let code = 500;
  let message = "internal server error";

  switch (err.name) {
    case "userNotFound":
      code = 401;
      message = "User Not Found";
      break;
  }

  console.log(err);
  console.log(err.name);
  res.status(code).json({ message });
};

module.exports = errorHandler;
