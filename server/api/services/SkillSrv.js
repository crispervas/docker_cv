const { skill } = require("../lib/postgreSQL/models");

class SkillSrv {
    constructor() {
        this.table = "skill";
        this.postgreSQL = skill;
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

    async create({ skill }) {
        const createId = await this.postgreSQL.create(skill);
        return createId || null;
    }

    async update({ skill, skillId }) {
        const updateId = await this.postgreSQL.update(skill, {
            where: {
                id: skillId,
            },
        });
        return updateId || null;
    }

    async delete({ skillId }) {
        const deleteId = await this.postgreSQL.destroy({
            where: {
                id: skillId,
            },
        });
        return deleteId || null;
    }

    async deleteQuery({ query }) {
        const deleteId = await this.postgreSQL.destroy(query);
        return deleteId || null;
    }

    async restore({ skillId }) {
        const deleteId = await this.postgreSQL.restore({
            where: {
                id: skillId,
            },
        });
        return deleteId || null;
    }

    async forcedRestore({ skillId }) {
        const deleteId = await this.postgreSQL.destroy({
            where: {
                id: skillId,
            },
            force: true,
        });
        return deleteId || null;
    }
}

module.exports = SkillSrv;
