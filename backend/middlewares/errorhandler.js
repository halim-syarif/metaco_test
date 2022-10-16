const errorHandler = (err, req, res, next) => {
  let code = 500;
  let message = "internal server error";

  switch (err.name) {
    case "incompleteData":
      code = 400;
      message = "Required team_id & tournament_id";
      break;

    case "incompleteDataEdit":
      code = 400;
      message = "Required team_id & tournament_id & lastWinnerTeam_id";
      break;

    case "wrongparams":
      code = 400;
      message = "Wrong passing params";
      break;

    case "NotFound":
      code = 400;
      message = "Data Not Found";
      break;

    case "HaveBeenWinner":
      code = 400;
      message = "One Team Can't Be Winner more than 1 place";
      break;

    case "WrongTeam":
      code = 400;
      message = "Wrong Team Id";
      break;

    case "WrongLastTeamId":
      code = 400;
      message = "Wrong Last Team Id";
      break;
  }
  
  console.log(err);
  res.status(code).json({ message });
};

module.exports = errorHandler;
