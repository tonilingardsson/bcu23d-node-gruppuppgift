import express from 'express';

const app = express();

app.use(express.json());

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))