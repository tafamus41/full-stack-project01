const allowedOrigin = require('./allowedOrigin')

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigin.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            console.log("error")
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true,
    optionsSuccessStatus: 200
}

module.exports = corsOptions 