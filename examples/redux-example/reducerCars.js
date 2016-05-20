//We import the different action types from our actions file
import { HANDLE_CHOSEN, RECEIVE_SERVICES, ADD_CAR } from './actions'

//On its first pass, Redux passes 'undefined' and an empty object into all the reducers that handle the store. In ES2015 if you pass undefined into a function, as Redux does, you can set that argument to something, in this case an object with two keys: services & chosen.

export default function cars(state = {
  services: [],
  chosen: ''
}, action) {
  switch(action.type) {
    case HANDLE_CHOSEN:
      return Object.assign({}, state, {
        chosen: action.service
      })
    case ADD_CAR:
      return Object.assign({}, state, {
        [state.chosen]: state[state.chosen].concat([state.chosen])
      })
    case RECEIVE_SERVICES:
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

//Redux and React rely on immutable data. As I understand it, they do a comparison of the old state and the new state and check to see what is different. If you directly mutate the old state, there is nothing to compare.

//Object.assign() merges object(s) to an empty object. By returning this new object we have not mutated the state.