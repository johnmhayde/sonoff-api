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
  const device = await connection.getDevice('1000cf6127');
  console.log(device);

  // /* toggle device */
  // await connection.toggleDevice('<your device id>');

})();
