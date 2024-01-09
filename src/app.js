import express from 'express';

const app = express();

app.use(express.json());

app.get('/test', (req, res) => {
  res.status(200).send({ message: 'Welcome to your new API' });
});

export default app;
