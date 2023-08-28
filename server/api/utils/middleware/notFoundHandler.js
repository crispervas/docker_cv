const boom = require("@hapi/boom");

const notFoundHandler = (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");

    const {
        output: { statusCode, payload },
    } = boom.notFound();

    res.status(statusCode).json({
        ...payload,
        company: "Server Cristhian Pereira",
        url: req.originalUrl,
    });
};

module.exports = {
    notFoundHandler,
};
