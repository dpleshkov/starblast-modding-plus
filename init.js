$.ajax("https://raw.githubusercontent.com/dpleshkov/starblast-modding-plus/master/config.js")
.done(function (data) {
  eval(data);
})
.fail(function (e) {
  game.modding.terminal.error("An error occured while loading the Modding+ extensions!");
});
