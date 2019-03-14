# server-side
MongoDB, Express, Node

## Usage

### Prepare your secret

run the script at the first level: (You need to add a JWT_SECRET in .env to connect to MongoDB)
```terminal
// in the root level
$ echo "JWT_SECRET=YOUR_JWT_SECRET" >> ./server/src/.env
```

### Start

```terminal
$ cd server   // go to server folder
$ npm i       // npm install pacakges
$ npm run dev // run it locally
// http://localhost:8000 be available
$ npm run build // this will build the server code to es5 js codes and generate a dist file
```

## Deploy Server to [Heroku](https://dashboard.heroku.com/)
```terminal
$ npm i -g heroku
$ heroku login
...
$ heroku create
$ npm run heroku:add <your-super-amazing-heroku-app>
$ npm run deploy:heroku
```

### After creating heroku

remember to update the file of [client/webpack.prod.js](https://github.com/amazingandyyy/mern-stack/blob/master/client/webpack.prod.js)
```javascript
 'API_URI': JSON.stringify('https://your-super-amazing-heroku-app.herokuapp.com')
```

# Dependencies(tech-stack)
| Server-side
| ---
| bcrypt-nodejs: ^0.0.3
| body-parser: ^1.15.2
| cors: ^2.8.1
| dotenv: ^2.0.0
| express: ^4.14.0
| jwt-simple: ^0.5.1
| mongoose: ^4.7.4
| morgan: ^1.7.0

## BUGs or comments
[Create new Issues](https://github.com/amazingandyyy/mern-stack/issues)

## Author
[Amazingandyyy](amazingandyyy.github.io)
- Feel free to find me on _[GitHub](https://github.com/amazingandyyy)_ and _[LiveCoding](https://www.livecoding.tv/amazingandyyy/)_
- or visit my _[page](http://amazingandyyy.github.io/)_

### License
[MIT](https://github.com/amazingandyyy/eventbrite-api/blob/master/LICENSE)
