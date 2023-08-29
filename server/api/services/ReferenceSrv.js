const { reference } = require("../lib/postgreSQL/models");

class ReferenceSrv {
    constructor() {
        this.table = "reference";
        this.postgreSQL = reference;
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

    async create({ reference }) {
        const createId = await this.postgreSQL.create(reference);
        return createId || null;
    }

    async update({ reference, referenceId }) {
        const updateId = await this.postgreSQL.update(reference, {
            where: {
                id: referenceId,
            },
        });
        return updateId || null;
    }

    async delete({ referenceId }) {
        const deleteId = await this.postgreSQL.destroy({
            where: {
                id: referenceId,
            },
        });
        return deleteId || null;
    }

    async deleteQuery({ query }) {
        const deleteId = await this.postgreSQL.destroy(query);
        return deleteId || null;
    }

    async restore({ referenceId }) {
        const deleteId = await this.postgreSQL.restore({
            where: {
                id: referenceId,
            },
        });
        return deleteId || null;
    }

    async forcedRestore({ referenceId }) {
        const deleteId = await this.postgreSQL.destroy({
            where: {
                id: referenceId,
            },
            force: true,
        });
        return deleteId || null;
    }
}

module.exports = ReferenceSrv;
