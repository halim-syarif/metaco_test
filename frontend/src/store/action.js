import appApi from './config'

export function setLoading(payload) {
  return {
    type: 'SET_LOADING',
    payload
  }
}

export function setErrorMessage(payload) {
  return {
    type: 'SET_ERROR_MESSAGE',
    payload
  }
}

export function setLeaderboardData(payload) {
  return {
    type: 'SET_LEADERBOARD_DATA',
    payload
  }
}

export function setSuccessMessage(payload) {
  return {
    type: 'SET_ERROR_MESSAGE',
    payload
  }
}

export function setUserData(payload) {
  return {
    type: 'SET_USER_DATA',
    payload
  }
}

export function setUserCount(payload) {
  return {
    type: 'SET_USER_COUNT',
    payload
  }
}

export function setTournamentData(payload) {
  return {
    type: 'SET_TOURNAMENT_DATA',
    payload
  }
}


export function getUsers(limit, offset, name){
  return (dispatch) => {
    dispatch(setLoading(true))
    appApi.get(`/users?limit=${limit}&offset=${offset}&name=${name}`)
    .then(response => {
      const { count, rows } = response.data
      dispatch(setUserCount(count))
      dispatch(setUserData(rows))
    })
    .catch(err => dispatch(setErrorMessage(err.response.data.message)))
    .finally(() => dispatch(setLoading(false)))
  }
}

export function getAllTournament(){
  return (dispatch) => {
    dispatch(setLoading(true))
    appApi.get(`/tournament`)
    .then(response => {
      const { rows } = response.data
      dispatch(setTournamentData(rows))
    })
    .catch(err => dispatch(setErrorMessage(err.response.data.message)))
    .finally(() => dispatch(setLoading(false)))
  }
}

export function postSaveWinner(tournament_id, team_id, position){
  return (dispatch) => {
    dispatch(setLoading(true))
    appApi.post(`/tournament/${position}`, {
      tournament_id,
      team_id
    })
    .then(response => {
      dispatch(setSuccessMessage(response.data.status))
      dispatch(getAllTournament())
    })
    .catch(err => {
      dispatch(setErrorMessage(err.response.data.message))
      dispatch(getAllTournament())
    })
    .finally(() => dispatch(setLoading(false)))
  }
}

export function editSaveWinner(tournament_id, team_id, lastWinnerTeam_id, position){
  return (dispatch) => {
    dispatch(setLoading(true))
    appApi.put(`/tournament/${position}`, {
      tournament_id,
      team_id: +team_id,
      lastWinnerTeam_id: +lastWinnerTeam_id
    })
    .then(response => {
      dispatch(setSuccessMessage(response.data.status))
      dispatch(getAllTournament())
    })
    .catch(err => {
      dispatch(setErrorMessage(err.response.data.message))
      dispatch(getAllTournament())
    })
    .finally(() => dispatch(setLoading(false)))
  }
}

export function deleteWinner(tournament_id, position){
  return (dispatch) => {
    dispatch(setLoading(true))
    appApi.delete(`/tournament/${tournament_id}/${position}`, {
      tournament_id
    })
    .then(response => {
      dispatch(setSuccessMessage(response.data.status))
      dispatch(getAllTournament())
    })
    .catch(err => {
      dispatch(setErrorMessage(err.response.data.message))
      dispatch(getAllTournament())
    })
    .finally(() => dispatch(setLoading(false)))
  }
}

export function getLeaderBoard(){
  return (dispatch) => {
    dispatch(setLoading(true))
    appApi.get(`/tournament/leaderboard`)
    .then(response => {
      dispatch(setLeaderboardData(response.data))
    })
    .catch(err => {
      dispatch(setErrorMessage(err.response.data.message))
    })
    .finally(() => dispatch(setLoading(false)))
  }
}

