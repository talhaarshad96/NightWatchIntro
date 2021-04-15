module.exports = 
{
    "src_folders" : ["tests"],
    "globals_path":"globals/globalModule",
    "page_objects_path":["pages"],

    "webdriver" : {
      "start_process": true,
      "server_path": require('chromedriver').path,
      "port": 9515
    },
    "test_settings" : {
      "default" : {
        "desiredCapabilities": {
          "browserName": "chrome"
        }
      },
      safari: {
        desiredCapabilities: {
            browserName: 'safari',
            alwaysMatch: {
                acceptInsecureCerts: false
            }
        },
        webdriver: {
            port: 4445,
            start_process: true,
            server_path: '/usr/bin/safaridriver'
        }
    }
  }
}