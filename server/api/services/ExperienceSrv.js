const { experience } = require("../lib/postgreSQL/models");

class ExperienceSrv {
    constructor() {
        this.table = "experience";
        this.postgreSQL = experience;
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

    async create({ experience }) {
        const createId = await this.postgreSQL.create(experience);
        return createId || null;
    }

    async update({ experience, experienceId }) {
        const updateId = await this.postgreSQL.update(experience, {
            where: {
                id: experienceId,
            },
        });
        return updateId || null;
    }

    async delete({ experienceId }) {
        const deleteId = await this.postgreSQL.destroy({
            where: {
                id: experienceId,
            },
        });
        return deleteId || null;
    }

    async deleteQuery({ query }) {
        const deleteId = await this.postgreSQL.destroy(query);
        return deleteId || null;
    }

    async restore({ experienceId }) {
        const deleteId = await this.postgreSQL.restore({
            where: {
                id: experienceId,
            },
        });
        return deleteId || null;
    }

    async forcedRestore({ experienceId }) {
        const deleteId = await this.postgreSQL.destroy({
            where: {
                id: experienceId,
            },
            force: true,
        });
        return deleteId || null;
    }
}

module.exports = ExperienceSrv;
