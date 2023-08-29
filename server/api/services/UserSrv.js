const { user } = require("../lib/postgreSQL/models");

class userSrv {
    constructor() {
        this.table = "user";
        this.postgreSQL = user;
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

    async create({ user }) {
        const createId = await this.postgreSQL.create(user);
        return createId || null;
    }

    async update({ user, userId }) {
        const updateId = await this.postgreSQL.update(user, {
            where: {
                id: userId,
            },
        });
        return updateId || null;
    }

    async delete({ userId }) {
        const deleteId = await this.postgreSQL.destroy({
            where: {
                id: userId,
            },
        });
        return deleteId || null;
    }

    async deleteQuery({ query }) {
        const deleteId = await this.postgreSQL.destroy(query);
        return deleteId || null;
    }

    async restore({ userId }) {
        const deleteId = await this.postgreSQL.restore({
            where: {
                id: userId,
            },
        });
        return deleteId || null;
    }

    async forcedRestore({ userId }) {
        const deleteId = await this.postgreSQL.destroy({
            where: {
                id: userId,
            },
            force: true,
        });
        return deleteId || null;
    }
}

module.exports = userSrv;
