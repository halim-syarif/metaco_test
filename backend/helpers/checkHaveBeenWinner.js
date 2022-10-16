

const checkHaveBeenWinner = (data, winnerTeamId) => {
    if (data.Tournament_results.length > 0){
      const haveBeenWinner = data.Tournament_results.findIndex(a => a.team_id == winnerTeamId)
      if (haveBeenWinner === -1) {
        return false
      } else {
        return true
      }
    } else {
      return false
    }
  }


module.exports = checkHaveBeenWinner