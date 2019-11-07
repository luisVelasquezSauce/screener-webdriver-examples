const PROTOCOL = 'SCREENER_USE_SSL' in process.env && process.env.SCREENER_USE_SSL == 'true' ? 'https' : 'http';

exports.config = {
  hostname: process.env.SCREENER_HUB_HOST || 'ondemand.saucelabs.com',
  port: Number(process.env.SCREENER_HUB_PORT) || 443,
  protocol: PROTOCOL,
  specs: [
    './specs/**/*.js'
  ],


  /// IT SEEMS LIKE THERE ARE CERTAIN PLATFORMS 
  //  THAT CAN'T BE RUN WITH LEGACY AND SOME THAT CAN'T BE RUN WITH W3C

  //Sauce W3C THIS DOESN'T WORK ^^^^
  // capabilities: [{
  //   "browserName": 'safari',
  //   "browserVersion": '11.1',
  //   "platformName": 'macOS 10.13',
  //   "sauce:options": {
  //   }
  // }],
  
  //Sauce W3C
  capabilities: [{
    "browserName": 'safari',
    "browserVersion": '12.0',
    "platformName": 'macOS 10.14',
    "sauce:options": {
    }
  }],

  //Sauce Legacy
  // capabilities: [{
  //   "browserName": 'safari',
  //   "version": '11.1',
  //   "platform": 'macOS 10.13',
  // }],

  // SCREENER W3C
  // capabilities: [{
  //   "browserName": 'safari',
  //   "browserVersion": '11.1',
  //   "platformName": 'macOS 10.13',
  //   screener: {
  //     resolution: '1280x1024',
  //     apiKey: process.env.SCREENER_API_KEY,
  //     group: process.env.SCREENER_GROUP_ID,
  //     proxy: `http://${process.env.SAUCE_USERNAME}:${process.env.SAUCE_ACCESS_KEY}@ondemand.saucelabs.com/wd/hub`
  //   }
  // }],

  //SCREENER Legacy
  // capabilities: [{
  //   "browserName": 'safari',
  //   "version": '11.1',
  //   "platform": 'macOS 10.13',
  //   screener: {
  //     resolution: '1280x1024',
  //     apiKey: process.env.SCREENER_API_KEY,
  //     group: process.env.SCREENER_GROUP_ID,
  //     proxy: `http://${process.env.SAUCE_USERNAME}:${process.env.SAUCE_ACCESS_KEY}@ondemand.saucelabs.com/wd/hub`
  //   }
  // }],

  framework: 'mocha',
  mochaOpts: {
    timeout: 90000
  },
  user: process.env.SAUCE_USERNAME,
  key: process.env.SAUCE_ACCESS_KEY
}