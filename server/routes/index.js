var authRouter = require("./routes/auth");

function routes(app){
    app.use('/auth', authRouter);
}

module.exports = routes

