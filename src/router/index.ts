// router/index.ts
import express from 'express';

import authentication from './authentication';
import users from './users';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Welcome to your API!');
});

export default (): express.Router => {
  authentication(router);
  users(router);

  return router;
};
