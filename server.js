import http from 'http';
import app from './index.js';
const port = 8000;

const server = http.createServer(app);

try {
    server.listen(port)
    console.log(`Server listening on http://localhost:${port}`);
} catch (err) {
    console.log(err);
}