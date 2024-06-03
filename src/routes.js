const {
  PostBook,GetBook,GetBookID,
  EditBookID,DeleteBookID,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: PostBook,
  },
  {
    method: 'GET',
    path: '/books',
    handler: GetBook,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: GetBookID,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: EditBookID,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: DeleteBookID,
  },
];

module.exports = routes;