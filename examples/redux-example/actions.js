export const HANDLE_CHOSEN = 'HANDLE_CHOSEN'
import 'isomorphic-fetch'

export function handleChosen(service) {
  return {
    type: HANDLE_CHOSEN,
    service
  }
}

export function addCarToService() {
  return {
    type: 'ADD_CAR'
  }
}

export function getServices() {
  return dispatch => {
    return fetch('/services')
      .then(response => response.json())
      .then(json => dispatch(receiveServices(json)))
  }
}

function receiveServices(services) {
  return {
    type: 'RECEIVE_SERVICES',
    services
  }
}