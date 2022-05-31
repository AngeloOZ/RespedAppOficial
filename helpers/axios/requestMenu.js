// const axios = require('axios');
const { configAxios } = require("../configAxios");

const getCategories = async () => {

    const config = {
        headers: {
            "Authorization": `Bearer ${process.env.JWT}`
        }
    }
    const { data } = await configAxios.get("/categoria", config);
    const categories = data.data;
    return categories;
}

const getProducts = async (id = null) => {
    const config = {
        headers: {
            "Authorization": `Bearer ${process.env.JWT}`
        }
    }
    const { data } = await configAxios.get("/producto", config);
    const products = data.data;
    return products;
}

module.exports = { getCategories, getProducts }