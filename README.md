# Introduction
As I was trying to learn the React ecosystem I had a hard time finding the barebones that I needed in order to start a project. My goal with this repo is to show the minimum that it takes to get a project off the ground in React using Webpack with a server. It has since grown to show a couple of examples--one in just React, and the other converted from just React to React and Redux.

## Installation
In any of the folders run:

npm install

Please note that a for the production example, npm install will create a 'build' folder inside of 'public'. In order to have the webpack-dev-server running with Express, please delete that folder. 

The reason that it is there is because in package.json there is a 'postinstall' script that is run. This is for deploying to Heroku so that webpack bundles your project correctly before running npm start.

# React, Webpack, Express, Basic
## To Start

webpack OR webpack--watch

node server.js

The webpack command bundles your project and exports bundle.js to public/build folder. Webpack --watch does the same thing, but will re-bundle your project whenever you save. The express server serves index.html which points to your bundle.js.

# React, Webpack, Express, Development
## To Start

node server.js

This example shows how to use an Express server alongside a webpack-dev-server. Webpack-dev-server itself creates a small Express server to serve your bundled static assets from memory. It does not create a physical copy of bundle.js. Your Express server, using http-proxy, proxies all requests to /build and sends it to your webpack-dev-server located on port 8080. 

# React, Webpack, Express, Production
## To Start

node server.js

This is the same as the development example with an added 'production' config for Webpack. It also has a 'postinstall' script that is ran after npm install is ran. The script will create a bundle.js in /public/build. If you want to use the development mode, delete the build folder or comment out the posinstall script in package.json before running npm install.

The posinstall script is for when deploying to heroku so that a physical bundle.js is created. It also sets the NODE_ENV to production so that requests are not proxied to the webpack-dev-server.

# React, Redux, Webpack, Express, Production
## To Start

node server.js

This is the same as the production example above but with a basic Redux layout. Redux manages the state of your application in something called a 'store'. Your components dispatch action objects to your store. A reducer then merges the previous state with what you want changed to create the new state. 

It also uses the react-redux module to implicitly pass down your store to your components so that they have access to the dispatch function, which is used to communicate with the store, in their props. See the comments in the files for more information on what is happening.

# React Example
## To Start

node server.js

This example uses the 'development' webpack with express example mentioned previously. The example is a car shop which has different services. As you click on the different radio buttons, it updates the state with the chosen service. As you click 'add car' a car with that service is added to the corresponding queue. The UI/UX leaves much to be desired, but it shows some basic functionality with React, forms, and utilizing some of the cool things that are capable in ES2015.

# Redux Example
## To Start

node server.js

This example also uses the 'development' webpack with express example. For this project I took the react-example and translated the state changes from the native methods of React into Redux. Redux does not ship with native async support for AJAX calls so you need to install redux-thunk. When the component will mount, an action creator is dispatched to the store. This action fetches the different car services from the server and then dispatches them to the store. See the comments for more information.
