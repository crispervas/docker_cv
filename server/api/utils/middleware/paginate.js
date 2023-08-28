const UXglobal = require("../../utils/global/UXglobal");

const paginate = async (pageSize, pageLimit, search = {}, order = []) => {
    try {
        const limit = parseInt(pageLimit, 10) || UXglobal.LIMIT_ROWS;
        const page = parseInt(pageSize, 10) || UXglobal.PAGE_ROWS;

        // create an options object
        let options = {
            offset: getOffset(page, limit),
            limit: limit,
        };

        // check if the search object is empty
        if (Object.keys(search).length) {
            options = { ...search, ...options };
        }

        // check if the order array is empty
        if (order && order.length) {
            options["order"] = order;
        }

        return {
            previousPage: getPreviousPage(page),
            currentPage: page,
            options,
            limit: limit,
        };
    } catch (error) {
        console.log(error);
    }
};

const getOffset = (page, limit) => {
    return page * limit - limit;
};

const getNextPage = (page = UXglobal.PAGE_ROWS, limit = UXglobal.LIMIT_ROWS, total) => {
    if (total == limit) {
        return parseInt(page) + 1;
    }

    return -1;
};

const getPreviousPage = (page) => {
    if (page <= 1) {
        return null;
    }
    return page - 1;
};

module.exports = {
    paginate,
    getNextPage,
};
