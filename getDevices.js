/*
  gitFlow process

  git add <filename>
  git commit =m "message"
  git push or git merge <path>
*/

const ewelink = require('ewelink-api');

(async () => {

  const connection = new ewelink({
    email: 'johnmichaelhayde@gmail.com',
    password: 'johnmichael06',
    region: 'us',
  });

  /* get all devices */
  const devices = await connection.getDevices();

  console.log(devices.length + " device(s) found");

  // loop through each device and print info
  for (i = 0; i < devices.length; i++) {
    console.log("Device ID: " + devices[i].deviceid);
    console.log("Switch Status: " + devices[i].params.switch);
    console.log("Temperature: " + (parseFloat(devices[i].params.currentTemperature) * 9 / 5 + 32).toFixed(2));
    console.log("Humidity: " + devices[i].params.currentHumidity);
  }

})();
