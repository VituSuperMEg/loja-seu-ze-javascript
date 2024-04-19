import express from 'express';
import {itens} from './mocks/itens';
import cors from 'cors';

const app = express();
const port = 3333;
app.use(cors())
app.get("/itens", (req : any, res : any) => {
  res.json(itens);
});

app.listen(port, () => console.log(`📍🎯Servidor rodando em http://localhost:${port}`))