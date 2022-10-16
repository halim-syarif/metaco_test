

const checkIsCorrectTeam = (data, teamId) => {
  const correctTeam = data.Teams.findIndex(a => a.id == teamId)
  if (correctTeam === -1) {
    return false
  } else {
    return true
  }
}


module.exports = checkIsCorrectTeam