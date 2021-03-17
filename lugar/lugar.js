var axios = require("axios").default;


const getLugarLatiLng = async(dir) => {

    const dirIP = dir;

    const instance = axios.create({
        baseURL: `http://api.ipstack.com/${ dirIP }`,
        //params: { location: argv.direccion },
        //headers: { 'x-rapidapi-key': '3372bb491faccc6f2f88e0dc6936f836' }
        params: { access_key: '3372bb491faccc6f2f88e0dc6936f836' }
    });

    const resp = await instance.get();

    if (resp.data.ip === 0) {
        throw new Error(`No hay resultados para ${ dirIP }`);
    }

    const data = resp.data;
    const direccion = data.city;
    const lat = data.latitude;
    const lon = data.longitude;

    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatiLng
}