const { gender } = require("../lib/postgreSQL/models");

class GenderSrv {
    constructor() {
        this.table = "gender";
        this.postgreSQL = gender;
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

    async create({ gender }) {
        const createId = await this.postgreSQL.create(gender);
        return createId || null;
    }

    async update({ gender, genderId }) {
        const updateId = await this.postgreSQL.update(gender, {
            where: {
                id: genderId,
            },
        });
        return updateId || null;
    }

    async delete({ genderId }) {
        const deleteId = await this.postgreSQL.destroy({
            where: {
                id: genderId,
            },
        });
        return deleteId || null;
    }

    async deleteQuery({ query }) {
        const deleteId = await this.postgreSQL.destroy(query);
        return deleteId || null;
    }

    async restore({ genderId }) {
        const deleteId = await this.postgreSQL.restore({
            where: {
                id: genderId,
            },
        });
        return deleteId || null;
    }

    async forcedRestore({ genderId }) {
        const deleteId = await this.postgreSQL.destroy({
            where: {
                id: genderId,
            },
            force: true,
        });
        return deleteId || null;
    }
}

module.exports = GenderSrv;
