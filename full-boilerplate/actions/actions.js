export const GET_HELLO_WORLD = 'GET_HELLO_WORLD',
             GET_GOODBYE_WORLD = 'GET_GOODBYE_WORLD'

export function getHelloWorld() {
  return {
    type: GET_HELLO_WORLD,
  }
}

export function getGoodbyeWorld() {
  return {
    type: GET_GOODBYE_WORLD,
  }
}