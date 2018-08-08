# mern-stack
MongoDB, Express, React/Redux, Node

## clone or download and send me PR(please)
```terminal
$ git clone https://github.com/amazingandyyy/mern-stack.git
```

# Usage(make it run on your machine)
- You need make the both the following two run

## prerequirement
- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^8.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

### Client-side usage(PORT: 3000)
```terminal
$ cd client
$ npm i
$ npm run dev
```

### Server-side usage(PORT: 8000)
(You need to add a JWT_SECRET in .env to connect to MongoDB -> make it run -> check your terminal for instructions
)
```terminal
$ cd server
$ npm i
$ npm run dev
```

### Deploy Server to [Heroku](https://dashboard.heroku.com/)
```terminal
$ npm i -g heroku
$ heroku login
$ heroku create
$ npm run heroku:add <your-heroku-app-name>
$ npm run deploy:heroku
```

# Dependencies(tech-stack)
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
[Amazingandyyy](amazingandyyy.github.io)
- Feel free to find me on _[GitHub](https://github.com/amazingandyyy)_ and _[LiveCoding](https://www.livecoding.tv/amazingandyyy/)_
- or visit my _[page](http://amazingandyyy.github.io/)_

### License
[MIT](https://github.com/amazingandyyy/eventbrite-api/blob/master/LICENSE)
