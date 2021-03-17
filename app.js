const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

/*
var options = {
    method: 'GET',
    url: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
    params: { location: 'New York' },
    headers: {
        'x-rapidapi-key': '3049bd01d9msh5cbbfeb448430cbp1a64e7jsnf30d30be3fef',
        'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
    }
};

axios.request(options).then(function(response) {
    console.log(response.data);
}).catch(function(error) {
    console.error(error);
});*/
/*
lugar.getLugarLatiLng(argv.direccion)
    .then(console.log);
*/

/*
clima.getClima(1.3200000524520874, 103.8198013305664)
    .then(console.log)
    .catch(console.log)*/

const getInfo = async(direccion) => {

    try {
        const coords = await lugar.getLugarLatiLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lon);

        return `El clima de ${coords.direccion} es ${temp.Clima} con temperatura de ${temp.Temperatura}°C`;
    } catch (error) {
        return `No se pudo determinar el clima de ${ direccion }`;
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);