const express = require("express");
const UXglobal = require("../utils/global/UXglobal");
const ExampleSrv = require("../services/ExampleSrv");
const cacheResponse = require("../utils/middleware/cacheResponse");
const protectRouters = require("../utils/middleware/protectRouters");
const permissionRouters = require("../utils/middleware/permissionRouters");

//PAGINATION
const { paginate, getNextPage } = require("../utils/middleware/paginate");

const { updateTime, createTime } = require("../utils/middleware/bodyParams");

const { FIVE_MINUTES_IN_SECONDS, SIXTY_MINUTES_IN_SECONDS } = require("../utils/time");

function ExampleCtrl(app, url) {
    const router = express.Router();

    app.use(`${url}/rol`, router);
    console.log(`${url}/rol`); // eslint-disable-line

    const exampleSrv = new ExampleSrv();

    router.get("/", async (req, res, next) => {
        // #swagger.path = '/example'
        // #swagger.tags = ['Examples']
        // #swagger.summary = 'Get all examples.'
        // #swagger.description = 'Endpoint used to get all examples.'
        cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
        let q = req.query;
        let query = {
            attributes: ["id", "nombre"],
            where: {
                ...q,
                grupo: 2,
                estado: UXglobal.uxCode.ENABLE.code,
            },
            order: [["nombre", "ASC"]],
        };
        try {
            const examples = await exampleSrv.getList({ query });

            let { count, rows } = examples;

            res.status(200).json({
                message: res.__n("uxExampleRead_success %s", count),
                count,
                rows,
            });
        } catch (err) {
            next(err);
        }
    });
}

module.exports = ExampleCtrl;
