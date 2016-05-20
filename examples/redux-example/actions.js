//Action creators must return an object, unless combined with thunk middleware.

export const HANDLE_CHOSEN = 'HANDLE_CHOSEN'
export const ADD_CAR = 'ADD_CAR'
export const RECEIVE_SERVICES = 'RECEIVE_SERVICES'

//This action creator returns an action object, which is what Redux is looking for.
export function handleChosen(service) {
  return {
    type: HANDLE_CHOSEN,
    service
  }
}

export function addCarToService() {
  return {
    type: ADD_CAR
  }
}

//Here we're returning a function which we need the thunk middleware for. At line 24, dispatch is an argument available because of the thunk middlware.
export function getServices() {
  return dispatch => {
    return fetch('/services')
      .then(response => response.json())
      .then(json => dispatch(receiveServices(json)))
  }
}

function receiveServices(services) {
  return {
    type: RECEIVE_SERVICES,
    services
  }
}