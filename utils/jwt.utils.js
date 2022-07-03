const jwt = require("jsonwebtoken");
require("dotenv").config();

const signJWT = (object, options) => {
  const privateKey = process.env.PRIVATE_KEY.replace(/\\n/g, "\n");
  return jwt.sign(object, privateKey, {
    ...(options && options),
    algorithm: "RS256",
  });
};

const verifyJWT = (token) => {
  try {
    const publicKey = process.env.PUBLIC_KEY.replace(/\\n/g, "\n");
    // jwt.verify is going to return decoded e.g. { name: 'Nick Kyrgios', id: '62c11eec5bae016d078c34e8', iat: 1656827982, exp: 1656828882}
    const decoded = jwt.verify(token, publicKey);
    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (e) {
    return {
      valid: false,
      expired: e.message === "jwt expired",
      decoded: null,
    };
  }
};

module.exports = {
  signJWT,
  verifyJWT,
};
