module.exports = {
  "Demo test RangoBot" : function (browser) {
    browser
      .url("http://rangobot.mybluemix.net")
      .waitForElementVisible('#id_twitter', 1000)
     .click('#id_twitter')
      .end();
  }
};