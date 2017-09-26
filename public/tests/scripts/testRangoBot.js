module.exports = {
  "Demo test RangoBot" : function (browser) {
    browser
      .url("http://rangobot.mybluemix.net")
      .waitForElementVisible('body', 1000)
      .pause(1000)
      .assert.containsText('#main', 'RangoBot')
      .end();
  }
};