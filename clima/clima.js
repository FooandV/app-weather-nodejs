const axios = require("axios");

const getClima = async (lat, lng) => {

    const resp= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=b059c8fc8ac5440e94f200563f23acd1&units=metric`)
    /* esto va retornar la temperatura, de acuerdo a la latitud y longitud que se le envie */
    return resp.data.main.temp;

};


module.exports = {
  getClima
};
