const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=9bd03a0ce9a98cd097781b288d90b8f3`);

    if (resp.cod === 400) {
        throw new Error(`Error!!! ${lat} - ${lng} no son correctos`);
    }

    return resp.data.main.temp;
}

module.exports = {
    getClima
}