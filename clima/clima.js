var axios = require("axios");

const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cc8f7c3f2f1273f68b151b65bcc74b21&units=metric`)

    return {
        Clima: resp.data.weather[0].main,
        Temperatura: resp.data.main.temp
    };

}

module.exports = {
    getClima
}