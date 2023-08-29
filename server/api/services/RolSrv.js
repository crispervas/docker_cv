const { rol } = require("../lib/postgreSQL/models/");

class RolSrv {
    constructor() {
        this.table = "rol";
        this.postgreSQL = rol;
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

    async create({ rol }) {
        const createId = await this.postgreSQL.create(rol);
        return createId || null;
    }

    async update({ rol, rolId }) {
        const updateId = await this.postgreSQL.update(rol, {
            where: {
                id: rolId,
            },
        });
        return updateId || null;
    }

    async delete({ rolId }) {
        const deleteId = await this.postgreSQL.destroy({
            where: {
                id: rolId,
            },
        });
        return deleteId || null;
    }

    async deleteQuery({ query }) {
        const deleteId = await this.postgreSQL.destroy(query);
        return deleteId || null;
    }

    async restore({ rolId }) {
        const deleteId = await this.postgreSQL.restore({
            where: {
                id: rolId,
            },
        });
        return deleteId || null;
    }

    async forcedRestore({ rolId }) {
        const deleteId = await this.postgreSQL.destroy({
            where: {
                id: rolId,
            },
            force: true,
        });
        return deleteId || null;
    }
}

module.exports = RolSrv;
