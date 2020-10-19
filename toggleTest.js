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
  // find light status
  var lightStatus = device.params.switch;
  // find new light status to toggle device
  console.log(lightStatus);
  if(lightStatus === 'off') {
    lightStatus = 'on';
  } else {
    lightStatus = 'off';
  }
  console.log(lightStatus);
  // toggle device on/off
  await connection.setDevicePowerState('deviceID', lightStatus);

})();
