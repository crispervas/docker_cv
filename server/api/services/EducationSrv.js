const { education } = require("../lib/postgreSQL/models");

class EducationSrv {
    constructor() {
        this.table = "education";
        this.postgreSQL = education;
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

    async create({ education }) {
        const createId = await this.postgreSQL.create(education);
        return createId || null;
    }

    async update({ education, educationId }) {
        const updateId = await this.postgreSQL.update(education, {
            where: {
                id: educationId,
            },
        });
        return updateId || null;
    }

    async delete({ educationId }) {
        const deleteId = await this.postgreSQL.destroy({
            where: {
                id: educationId,
            },
        });
        return deleteId || null;
    }

    async deleteQuery({ query }) {
        const deleteId = await this.postgreSQL.destroy(query);
        return deleteId || null;
    }

    async restore({ educationId }) {
        const deleteId = await this.postgreSQL.restore({
            where: {
                id: educationId,
            },
        });
        return deleteId || null;
    }

    async forcedRestore({ educationId }) {
        const deleteId = await this.postgreSQL.destroy({
            where: {
                id: educationId,
            },
            force: true,
        });
        return deleteId || null;
    }
}

module.exports = EducationSrv;
