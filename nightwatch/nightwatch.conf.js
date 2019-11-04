module.exports = {
  src_folders: ['tests'],
  test_settings: {
    default: {
      webdriver: {
        host: process.env.SCREENER_HUB_HOST || 'hub.screener.io',
        port: process.env.SCREENER_HUB_PORT || 443,
        ssl: 'SCREENER_USE_SSL' in process.env && process.env.SCREENER_USE_SSL == 'true'
      },
      desiredCapabilities: {
        browserName: 'chrome',
        screener: {
          resolution: '1280x1024',
          apiKey: process.env.SCREENER_API_KEY,
          group: process.env.SCREENER_GROUP_ID
        }
      }
    }
  }
};
