export const isAuthenticated = (req, res, next) => {
    if (req.session && req.session.userId) {
        next();  
    } else {
        res.status(401).send('Vous devez être connecté pour accéder à cette page');
    }
};