const { verifytoken } = require('../config/jwt');

// El front debería mandar así el token
// el token se obtendrá de una coockie o localstorage
/* fetch('URL', {
  method: 'GET',
  headers: {
    authorization: `Bearer ${token}`
  }
}) */

const hasValidAuthJwt = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const [, token] = authorization.split(' ');
    const payload = verifytoken(token);

    req.user = payload;

    next();
  } catch (err) {
    res.status(401).json({ data: 'Not authenticated' });
  }
};

module.exports = {
  hasValidAuthJwt,
};
