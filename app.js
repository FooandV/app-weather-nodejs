const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").options({
  direccion: {
    alias: "d",
    descripcion: "Direccion de la ciudad para obtener el clima",
    demand: true
  }
}).argv;
// console.log(argv.direccion);

/* ejecutand la función que regresa una promesa: */
// lugar.getLugarLatLng(argv.direccion)
//      .then( console.log )

/* preba ejecutando la latitud y longitud para New York */
// clima.getClima(40.750000, -74.000000 )
/* clima Medellin */
// clima.getClima(11.130000, -123.959999 )
/* clima Rionegro */
// clima.getClima(2.720000, -75.900002 )
// .then( console.log)
// .catch(console.log);

const getInfo = async (direccion) => {
  try {
    /* primero se necesita las coordenadas: de la promesa que define la latitud y longitud: */
    const coords = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(coords.lat, coords.lng);

    return `El clima de ${coords.direccion} es de ${temp}.`;
  } catch (e) {
    return `No se pudo determinar el clima de ${direccion}`;
  }
};

getInfo(argv.direccion)
            .then(console.log)
            .catch(console.log);