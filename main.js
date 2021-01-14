var XMLHttpRequest = require("xhr2");

var Elm = require("./bundle.js").Elm;

var app = Elm.Main.init();

app.ports.log.subscribe(
    (a) => process.stdout.write(a)
);
