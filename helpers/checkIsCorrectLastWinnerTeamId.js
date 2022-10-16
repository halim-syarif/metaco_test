

const checkIsCorrectLastWinnerTeamId = (data, lastWinnerTeam_id) => {
  const correctId = data.Tournament_results.findIndex(a => a.team_id == lastWinnerTeam_id)
  if (correctId === -1) {
    return false
  } else {
    return true
  }
}


module.exports = checkIsCorrectLastWinnerTeamId