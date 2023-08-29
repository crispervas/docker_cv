const express = require("express");
const UXglobal = require("../utils/global/UXglobal");
const RolSrv = require("../services/RolSrv");
const cacheResponse = require("../utils/middleware/cacheResponse");
const protectRouters = require("../utils/middleware/protectRouters");
const permissionRouters = require("../utils/middleware/permissionRouters");

//PAGINATION
const { paginate, getNextPage } = require("../utils/middleware/paginate");

const { updateTime, createTime } = require("../utils/middleware/bodyParams");

const { FIVE_MINUTES_IN_SECONDS, SIXTY_MINUTES_IN_SECONDS } = require("../utils/time");

function RolCtrl(app, url) {
    const router = express.Router();

    app.use(`${url}/rol`, router);
    console.log(`${url}/rol`); // eslint-disable-line

    const rolSrv = new RolSrv();

    router.get("/", async (req, res, next) => {
        // #swagger.path = '/rol'
        // #swagger.tags = ['ROLES']
        // #swagger.summary = 'Get all roles.'
        // #swagger.description = 'Endpoint used to get all roles.'
        cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
        let q = req.query;
        let query = {
            attributes: ["id", "nombre", "code"],
            where: {
                ...q,
                estado: UXglobal.uxCode.ENABLE.code,
            },
            order: [["nombre", "ASC"]],
        };
        try {
            const roles = await rolSrv.getList({ query });

            let { count, rows } = roles;

            res.status(200).json({
                message: res.__n("uxRolRead_success %s", count),
                count,
                rows,
            });
        } catch (err) {
            next(err);
        }
    });
}

module.exports = RolCtrl;
