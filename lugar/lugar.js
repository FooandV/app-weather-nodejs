const axios = require("axios");

const getLugarLatLng = async (dir) => {
  /* encodeURI: Codifica una cadena de texto como un identificador 
  uniforme de recursos (URI) válido */
  const encodedUlr = encodeURI(dir);

  /* instancia de la petición a la API de geolocalizacion de ciudades: */
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUlr}`,
    headers: {
      "x-rapidapi-key": "60e15bdc94msh9c3ff30ced043cep1110fdjsn6065647bbe9b"
    }
  });
  /* para ejecutarla: */
  const resp = await instance.get();
  /* si el resultado del servicio REST es 0 puede disparar un error 
  es decir que no existe una dirección:
  */
 
  if (resp.data.Results.lenght === 0) {
    throw new Error(`No hay resultados para ${dir}`);
  }

  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;

  return {
    direccion,
    lat,
    lng
  };
};

module.exports = {
  getLugarLatLng
};
