// const { verify } = require("jsonwebtoken");

// const validateToken = (req, res, next) => {
    
//     if (!(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')) 
//     return res.status(401).json({ message: 'No Token Detected' });
    
//     const accessToken = req.header("authorization").split(' ')[1];


//     if (!accessToken) return res.json({ error: "User Not Logged In!" })

//     try {
//         const validToken = verify(accessToken, "veryimportant");
//         req.user = validToken;
//         if (validToken) {
//             return next();
//         }
//         return res.json(validToken)
//     } catch (err) {
//         return res.json({ error: err });
//     }
// };
// module.exports = { validateToken };
const { verify } = require("jsonwebtoken");


const validateToken = (req, res, next) => {
    const accessToken = req.header("authorization");
    if (!accessToken) return res.json({ error: "User not logged in" });
    try {
        const validToken = verify(accessToken, "veryimportant");
        if (validToken) {
            req.user = validToken;
            return next();
        }
    } catch (err) {
        res.json({ error: err });
    }
};

module.exports = { validateToken };