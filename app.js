const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direcccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtner el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(argv.direcccion);
        let temp = await clima.getClima(coors.lat, coors.lng);

        return `El clima en ${ coors.direcccion } es de ${ temp }ºC`;
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`;
    };

}


getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));