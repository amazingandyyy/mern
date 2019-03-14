# mern-stack
MERN stands for MongoDB, Expressjs, React/Redux, Nodejs

## clone or download
```terminal
$ git clone https://github.com/amazingandyyy/mern-stack.git
$ npm i
```

## project structure
```terminal
...
LICENSE
package.json
server/
   package.json
   .env (to create .env, check [prepare your secret session])
client/
   package.json
...
```

# Usage (run fullstack app on your machine)

## Prerequirements
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^8.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

* notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)
```terminal
$ cd client   // go to client folder
$ npm i       // npm install pacakges
$ npm run dev // run it locally

// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
$ npm run start // this will run the files in docs, this behavior is exactly the same how gh-pages will run your static site
```

## Server-side usage(PORT: 8000)

### Prepare your secret

run the script at the first level:

(You need to add a JWT_SECRET in .env to connect to MongoDB)

```terminal
// in the root level
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> ./server/src/.env
```

### start

```terminal
$ cd server   // go to server folder
$ npm i       // npm install pacakges
$ npm run dev // run it locally
$ npm run build // this will build the server code to es5 js codes and generate a dist file
```

## Deploy Server to [Heroku](https://dashboard.heroku.com/)
```terminal
$ npm i -g heroku
$ heroku login
...
$ heroku create
$ npm run heroku:add <the-super-amazing-heroku-app-name>
$ npm run deploy:heroku
```

# Dependencies(tech-stacks)
Client-side | Server-side
--- | ---
axios: ^0.15.3 | bcrypt-nodejs: ^0.0.3
babel-preset-stage-1: ^6.1.18|body-parser: ^1.15.2
lodash: ^3.10.1 | cors: ^2.8.1
react: ^16.2.0 | dotenv: ^2.0.0
react-dom: ^16.2.0 | express: ^4.14.0
react-redux: ^4.0.0 | jwt-simple: ^0.5.1
react-router-dom: ^4.2.2 | mongoose: ^4.7.4
redux: ^3.7.2 | morgan: ^1.7.0
redux-form: ^6.4.1 |
redux-thunk: ^2.1.0 |

# Screenshots of this project

User visit public and Home page
![User visit public and Home page](http://i.imgur.com/ORCGHHY.png)

User can sign in or sign up
![User can sign in or sign up](http://i.imgur.com/rrmbU5I.png)

After signing in user can go to account route and make request to token-protected API endpoint
![After signing in user can go to account route](http://i.imgur.com/FzLB51u.png)

## BUGs or comments
[Create new Issues](https://github.com/amazingandyyy/mern-stack/issues)

## Author
[Amazingandyyy](https://amazingandyyy.com)

### License
[MIT](https://github.com/amazingandyyy/eventbrite-api/blob/master/LICENSE)
