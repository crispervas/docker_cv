// const { example } = require("../lib/postgreSQL/models");

class ExampleSrv {
    constructor() {
        this.table = "example";
        this.postgreSQL = example;
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

    async create({ example }) {
        const createId = await this.postgreSQL.create(example);
        return createId || null;
    }

    async update({ example, exampleId }) {
        const updateId = await this.postgreSQL.update(example, {
            where: {
                id: exampleId,
            },
        });
        return updateId || null;
    }

    async delete({ exampleId }) {
        const deleteId = await this.postgreSQL.destroy({
            where: {
                id: exampleId,
            },
        });
        return deleteId || null;
    }

    async deleteQuery({ query }) {
        const deleteId = await this.postgreSQL.destroy(query);
        return deleteId || null;
    }

    async restore({ exampleId }) {
        const deleteId = await this.postgreSQL.restore({
            where: {
                id: exampleId,
            },
        });
        return deleteId || null;
    }

    async forcedRestore({ exampleId }) {
        const deleteId = await this.postgreSQL.destroy({
            where: {
                id: exampleId,
            },
            force: true,
        });
        return deleteId || null;
    }
}

module.exports = ExampleSrv;
