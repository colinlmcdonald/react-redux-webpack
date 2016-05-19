import HANDLE_CHOSEN from './actions'

export default function cars(state = {
  services: [],
  chosen: ''
}, action) {
  switch(action.type) {
    case 'HANDLE_CHOSEN':
      return Object.assign({}, state, {
        chosen: action.service
      })
    case 'ADD_CAR':
      return Object.assign({}, state, {
        [state.chosen]: state[state.chosen].concat([state.chosen])
      })
    case 'RECEIVE_SERVICES':
      action.services.forEach(service => {
        state[service] = []
      })
      return Object.assign({}, state, {
        services: action.services
      })
    default:
      return state
  }
}
//{ }