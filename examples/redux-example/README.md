# Redux Example
## To Start
npm install

node server.js

## File Structure
Root.js provides some of the set-up for the frontend. This is where our Redux store is created and where React is directed to render our application. Carshop.js contains our components (carlist.js, car.js, selection.js). When our CarShop component will mount it dispataches an action (located in action.js) to our store which is then heard by our reducer (reducerCars.js) which creates our new state that is returned to our CarShop component.
