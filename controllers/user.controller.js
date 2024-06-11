import path from 'node:path';
import { fileURLToPath } from 'node:url';
import crypto from 'crypto-js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const user = {
    login: "Alan",
    password: "73a056240baf641c8dc2c9bab20e0c2b457bd6e4" // Correspond à "4l4n"
};

export const showLoginForm = (req, res) => {
    res.sendFile(path.join(__dirname, '../public/views/login.html'));
};

export const handleLogin = (req, res) => {
    const { login, password } = req.body;
    const hashedPassword = crypto.SHA1(password).toString();

    if (login === user.login && hashedPassword === user.password) {
        res.redirect('/home');
    } else {
        res.status(401).send('Identifiant ou mot de passe incorrect');
    }
}