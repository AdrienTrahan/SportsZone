const mongo = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const sha256 = require("sha256");
const {errors, errorify} = require('../errors/errors');
String.prototype.errorify = errorify;

module.exports = function (mongodb){
  let modules = {};
  modules.token = async function (req, res){
    try{
      let token = req.query.id + "-" + sha256(Date.now() + "" + Math.random() + req.query.id);
      let result = await mongodb.collection("credentials").updateOne({"_id": new ObjectID(req.query.id)}, {$push: {tokens: token}});
      if (result.modifiedCount == 0){res.send(errors["986"].errorify()); return}
      res.json({token: token});
    }catch{}
  }
  modules.verify = async function (token){
    try{
      if (token == undefined){return false}
      let result = await mongodb.collection("credentials").find({tokens: {$in: [token]}}).project().toArray();
      return (result.length > 0);
    }catch{}
  }
  modules.login = async function (req, res){
    try{
      if (!(req.query.email && req.query.password)){ res.send(errors["792"].errorify()); return};
      if (req.query.salt == undefined){
        let users = (await mongodb.collection("credentials").find({email: req.query.email.toUpperCase()}).project().toArray());
        if (users.length == 0){res.send(errors["986"].errorify()); return};
        if (users[0].salt == undefined){res.send(errors["986"].errorify()); return};
        req.query.salt = users[0].salt;
        let hashed = sha256(req.query.password + "" + req.query.salt);
        if (hashed != users[0].password){res.send(errors["986"].errorify()); return};
        req.query.id = users[0]._id;
        modules.token(req, res);
      }else{
        let hashed = sha256(req.query.password + "" + req.query.salt);
        let users = (await mongodb.collection("credentials").find({email: req.query.email.toUpperCase(), password: hashed}).project().toArray());
        if (users.length == 0){res.send(errors["986"].errorify()); return};
        req.query.id = users[0]._id;
        modules.token(req, res);
      }
    }catch{}
  }
  modules.signup = async function (req, res){
    try{
      if (!(req.query.last && req.query.first && req.query.email && req.query.password && req.query.role)) {res.send(errors["792"].errorify()); return};
      if (!((req.query.last + req.query.first + req.query.email).length < 70)) {res.send(errors["567"].errorify()); return};
      if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.query.email))) {res.send(errors["983"].errorify()); return};
      if ((await mongodb.collection("credentials").find({email: req.query.email.toUpperCase()}).project({id: 1}).toArray()).length > 0) {res.send(errors["541"].errorify()); return};
      let salt = Math.random();
      let hashed = sha256(req.query.password + "" + salt);
      let response = (await mongodb.collection("credentials").insertOne(
        {
          email: req.query.email.toUpperCase(),
          first: req.query.first.toUpperCase(),
          last: req.query.last.toUpperCase(),
          password: hashed,
          salt: salt,
          tokens: [],
          players: [],
          teams: [],
          hostedTeams: [],
          availableRoles: ["" + parseInt(req.query.role) + ""],
          publicInfo: [],
          conversations: [],
          passwordReset: sha256(Math.random() + "random")
        }));
      if (response.insertedCount == 0 || response.ops.length == 0){res.send(errors["433"].errorify()); return};
      if (!!!response.ops[0].salt){res.send(errors["433"].errorify()); return};
      req.query.salt = response.ops[0].salt;
      modules.login(req, res);
    }catch{}
  }
  modules.logout = async function (req, res){
    try{
      if (!req.headers.auth){res.send(errors["992"].errorify()); return;};
      let id = req.headers.auth.split("-")[0];
      await mongodb.collection("credentials").updateOne({_id: new ObjectID(id)}, {$pull: {tokens: req.headers.auth}});
      res.send("done!")
    }catch{}
  }
  modules.getUserInfo = async function (id, convo){
    try{
      let info = await mongodb.collection("credentials").find({_id: new ObjectID(id)}).project({first: 1, last: 1, _id: 1}).toArray();
      info[0].id = info[0]._id;
      delete info[0]._id;
      return (info)[0];
    }catch(error){
    }
  }
  return modules;
};