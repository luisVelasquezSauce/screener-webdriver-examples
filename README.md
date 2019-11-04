# Screener E2E WebDriver Examples

### How to Run

```
$ git clone https://github.com/screener-io/screener-webdriver-examples.git
$ cd screener-webdriver-examples
$ npm install
```

Then, add `SCREENER_API_KEY` and `SCREENER_GROUP_ID` environment variables to your system, getting the values from your Screener E2E account. 

Optional environment variables 
`SCREENER_HUB_HOST` default is hub.screener.io
`SCREENER_HUB_PORT` default is 443
`SCREENER_USE_SSL` default is true

##### Nightwatch

```
$ npm run test-nightwatch
```

##### Protractor

```
$ npm run test-protractor
```

##### Python

```
$ npm run test-python
```

##### WebdriverIO

```
$ npm run test-webdriverio
```
