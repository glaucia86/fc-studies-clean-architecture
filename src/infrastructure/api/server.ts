/**
 * file: src/infrastructure/api/server.ts
 * description: file responsible for external API integration with Express.js
 * data: 04/01/2024
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import dotenv from 'dotenv';
import { app } from './express';

dotenv.config();
const port: number = Number(process.env.PORT) || 3000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
});

