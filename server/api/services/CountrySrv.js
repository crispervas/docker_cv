const { country } = require("../lib/postgreSQL/models");

class CountrySrv {
    constructor() {
        this.table = "country";
        this.postgreSQL = country;
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

    async create({ country }) {
        const createId = await this.postgreSQL.create(country);
        return createId || null;
    }

    async update({ country, countryId }) {
        const updateId = await this.postgreSQL.update(country, {
            where: {
                id: countryId,
            },
        });
        return updateId || null;
    }

    async delete({ countryId }) {
        const deleteId = await this.postgreSQL.destroy({
            where: {
                id: countryId,
            },
        });
        return deleteId || null;
    }

    async deleteQuery({ query }) {
        const deleteId = await this.postgreSQL.destroy(query);
        return deleteId || null;
    }

    async restore({ countryId }) {
        const deleteId = await this.postgreSQL.restore({
            where: {
                id: countryId,
            },
        });
        return deleteId || null;
    }

    async forcedRestore({ countryId }) {
        const deleteId = await this.postgreSQL.destroy({
            where: {
                id: countryId,
            },
            force: true,
        });
        return deleteId || null;
    }
}

module.exports = CountrySrv;
