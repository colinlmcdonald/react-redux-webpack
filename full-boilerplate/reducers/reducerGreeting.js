import { GET_HELLO_WORLD, GET_GOODBYE_WORLD } from '../actions/actions'

export function greeting(state = {
  hello: '',
  goodbye: ''
}, action) {
  switch(action.type) {
    case GET_HELLO_WORLD:
      return Object.assign({}, state, {
        hello: 'Hello World',
      })
    case GET_GOODBYE_WORLD:
      return Object.assign({}, state, {
        goodbye: 'Goodbye World',
      })
    default:
      return state
  }
}
