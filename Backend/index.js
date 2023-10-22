const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");

const mongo = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;



let url = "mongodb://localhost:27017";
let mongodb = undefined;
mongo.connect(url, async function(err, client) {

    if (err) throw err;
    console.log("mongodb Connected...");
    mongodb = client.db("SportsZone");

    const mail = require("./mail/mail")(mongodb);
    const credentials = require('./credentials/registration')(mongodb);
    const queries = require('./queries')(mongodb, mail);
    const api = require('./api-routes')(mongodb, mail, credentials, queries);

    let app = express();

    app.use(function (req, res, next) {
        let origins = ["http://127.0.0.1:8100", "http://127.0.0.1:3000"];
        if (origins.includes(req.headers.origin) >= 0){
            res.header("Access-Control-Allow-Origin", req.headers.origin);
        }
        res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key,auth');
        res.header('Access-Control-Allow-Credentials', true);
        next();
    });
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use("/", express.static(path.join(__dirname + '/public/pages')))
    app.use("//", express.static(path.join(__dirname + '/public/pages/welcome')))
    app.use("/images", express.static(path.join(__dirname + '/public/images')))
    app.use("/helpers", express.static(path.join(__dirname + '/public/helpers')))
    app.use("/librairies", express.static(path.join(__dirname + '/public/librairies')))
    app.use("/cdn", express.static(path.join(__dirname + '/cdn')))
    app.use("/dashboard/*", express.static(path.join(__dirname + '/public/pages/dashboard')));

    app.use('/api', api);

    let server = app.listen(3000, console.log("listening on port 3000!"));
    require('./socket/socket')(server, mongodb, queries);
});
