import express from 'express'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import router from './routes/index.js'

const server = express();
const port = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const staticPath = path.join(__dirname, 'public');

server.use(express.static(staticPath));
server.use(express.urlencoded({ extended: false }));
server.use(express.json());
server.use(router);

server.use((req, res) => {
    res.status(404).send(`
        <h1>Not found</h1>
        <div><a href="/">Home</a></div>
    `)
})

server.listen(port, () => {
    console.log(`Listening on port ${port}`);
})