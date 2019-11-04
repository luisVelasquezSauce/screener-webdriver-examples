const PROTOCOL = 'SCREENER_USE_SSL' in process.env && process.env.SCREENER_USE_SSL == 'true' ? 'https' : 'http';
const HUB_URL = process.env.SCREENER_HUB_HOST || 'hub.screener.io';
const URL = `${PROTOCOL}://${HUB_URL}/wd/hub`

exports.config = {
  seleniumAddress: URL,
  specs: ['spec.js'],
  capabilities: {
    browserName: 'chrome',
    screener: {
      name: 'Protractor Example',
      resolution: '1280x1024',
      apiKey: process.env.SCREENER_API_KEY,
      group: process.env.SCREENER_GROUP_ID
    }
  }
};
