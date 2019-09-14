Backend Challenge

route list is:

GET http://localhost:3000/api/albums, http://localhost:3000/api/albums/:id, http://localhost:3000/api/photos, http://localhost:3000/api/photos/:id, http://localhost:3000/api/users, http://localhost:3000/api/users/:id

POST http://localhost:3000/api/albums, http://localhost:3000/api/photos, http://localhost:3000/api/users, http://localhost:3000/api/users/authenticate


INSTALLATION
- clone this repo
- npm install
- mongod
- npm start


JWT token will be used to access photos and albums routes. We need pass token in header with key=x-access-token and value = jwt token. When we do action POST http://localhost:3000/api/users/authenticate, if it's successful API will show the token value.

