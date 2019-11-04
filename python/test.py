from selenium import webdriver
import os

protocol = 'https' if ('SCREENER_USE_SSL' in os.environ and os.environ['SCREENER_USE_SSL'] == 'true') else 'http'
hub_url = os.environ['SCREENER_HUB_HOST'] if 'SCREENER_HUB_HOST' in os.environ else 'hub.screener.io'
url = "{}://{}/wd/hub".format(protocol, hub_url)

screener = {
  'name': 'Python Example',
  'resolution': '1280x1024',
  'apiKey': os.environ['SCREENER_API_KEY'],
  'group': os.environ['SCREENER_GROUP_ID']
}
caps = {
  'browserName': 'chrome',
  'screener': screener
}
driver = webdriver.Remote(
  desired_capabilities=caps,
  command_executor=url
)
driver.get("https://screener.io")
driver.execute_script('/*@screener.snapshot*/', 'Home')
driver.quit()
