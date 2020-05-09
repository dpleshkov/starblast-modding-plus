$.ajax("https://raw.githubusercontent.com/Bhpsngum/img-src/master/config.js")
.done(function (data) {
  eval(data);
})
.fail(function (e) {
  console.log("An error occured while loading the Modding+ extensions!");
});
