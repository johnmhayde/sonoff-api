const ewelink = require('ewelink-api');

(async () => {

  const connection = new ewelink({
    email: 'johnmichaelhayde@gmail.com',
    password: 'johnmichael06',
    region: 'us',
  });

  // /* get all devices */
  // const devices = await connection.getDevices();
  // console.log(devices);

  /* get specific devide info */
  // const device = await connection.getDevice('1000cf6127');
  // console.log(device);

  // /* toggle device */
  // await connection.toggleDevice('<your device id>');

  /* get temp and humidity */
	console.log("getting device information from connection");
	const device = await connection.getDevice('1000cf6127');
	//console.log("device info: "+JSON.stringify(device));
	if (device && device != null && !device.error) {
		const temperatureValue = (parseFloat(device.params.currentTemperature) * 9 / 5 + 32).toFixed(2);
    const humidityValue = (parseFloat(device.params.currentHumidity));
		console.log("Temperature : " + temperatureValue + "°");
    console.log("Humidity : " + humidityValue + "%");
		//await updateNewTemp('1000cf6127', temperatureValue);
	} else {
		//		throw Error(device2);
		console.log("Error retrieving temperature, nothing to udpate");
	}

})();
