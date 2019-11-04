const PROTOCOL = 'SCREENER_USE_SSL' in process.env && process.env.SCREENER_USE_SSL == 'true' ? 'https' : 'http';

exports.config = {
  host: process.env.SCREENER_HUB_HOST || 'hub.screener.io',
  port: process.env.SCREENER_HUB_PORT || 443,
  protocol: PROTOCOL,
  specs: [
    './specs/**/*.js'
  ],
  capabilities: [{
    browserName: 'chrome',
    screener: {
      resolution: '1280x1024',
      apiKey: process.env.SCREENER_API_KEY,
      group: process.env.SCREENER_GROUP_ID
    }
  }],
  framework: 'mocha',
  mochaOpts: {
    timeout: 90000
  }
}
