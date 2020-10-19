const ewelink = require('ewelink-api');

(async () => {

  const connection = new ewelink({
    email: 'email@gmail.com',
    password: 'password',
    region: 'us',
  });

  /* get temp and humidity */
	console.log("getting device information from connection");
	const device = await connection.getDevice('deviceID');
	//console.log("device info: "+JSON.stringify(device));
	if (device && device != null && !device.error) {
		const temperatureValue = (parseFloat(device.params.currentTemperature) * 9 / 5 + 32).toFixed(2);
    const humidityValue = (parseFloat(device.params.currentHumidity));
		console.log("Temperature : " + temperatureValue + "°");
    console.log("Humidity : " + humidityValue + "%");
		//await updateNewTemp('1000cf6127', temperatureValue);
	} else {
		//		throw Error(device);
		console.log("Error retrieving temperature, nothing to udpate");
	}

})();
