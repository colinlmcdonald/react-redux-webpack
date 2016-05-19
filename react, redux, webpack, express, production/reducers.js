import { GET_HELLO_WORLD } from './actions'

export default function cars(state = {
  hello: ''
}, action) {
  switch(action.type) {
    case GET_HELLO_WORLD:
      return Object.assign({}, state, {
        hello: 'Hello World'
      })
    default:
      return state
  }
}
