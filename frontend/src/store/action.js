import appApi from './config'

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

