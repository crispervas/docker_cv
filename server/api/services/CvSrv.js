const { cv } = require("../lib/postgreSQL/models");

class CvSrv {
    constructor() {
        this.table = "cv";
        this.postgreSQL = cv;
    }

    async getList({ query }) {
        const datos = await this.postgreSQL.findAndCountAll(query);
        return datos || [];
    }

    async getListQuery({ query, scope }) {
        const datos = await this.postgreSQL.scope(scope).findAndCountAll(query);
        return datos || [];
    }

    async getTotal({ query }) {
        const amount = await this.postgreSQL.count(query);
        return amount || 0;
    }

    async getTotalQuery({ query, scope }) {
        const amount = await this.postgreSQL.scope(scope).count(query);
        return amount || 0;
    }

    async get({ query }) {
        const dato = await this.postgreSQL.findOne(query);
        return dato || null;
    }

    async getQuery({ query, scope }) {
        const dato = await this.postgreSQL.scope(scope).findOne(query);
        return dato || null;
    }

    async create({ cv }) {
        const createId = await this.postgreSQL.create(cv);
        return createId || null;
    }

    async update({ cv, cvId }) {
        const updateId = await this.postgreSQL.update(cv, {
            where: {
                id: cvId,
            },
        });
        return updateId || null;
    }

    async delete({ cvId }) {
        const deleteId = await this.postgreSQL.destroy({
            where: {
                id: cvId,
            },
        });
        return deleteId || null;
    }

    async deleteQuery({ query }) {
        const deleteId = await this.postgreSQL.destroy(query);
        return deleteId || null;
    }

    async restore({ cvId }) {
        const deleteId = await this.postgreSQL.restore({
            where: {
                id: cvId,
            },
        });
        return deleteId || null;
    }

    async forcedRestore({ cvId }) {
        const deleteId = await this.postgreSQL.destroy({
            where: {
                id: cvId,
            },
            force: true,
        });
        return deleteId || null;
    }
}

module.exports = CvSrv;
