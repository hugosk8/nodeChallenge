import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const showHomePage = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/home.html'));  
};
