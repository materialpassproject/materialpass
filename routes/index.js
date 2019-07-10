var express = require('express');
var router = express.Router();
var monk=require('monk');
var db=monk('localhost:27017/material');
console.log('connected')
var collection=db.get('save')
var collection1=db.get('login')
//var collection2=db.get('items')
//var table = db.get('table');
/* GET home page. */
router.get('/', function(req, res, next){
if(req.session&&req.session.user){
res.locals.user==req.session.user;
res.redirect('/home');
    }
  res.render('index', { title:'Express' });
});
router.get('/home', function(req, res) {
    if(req.session && req.session.user){
    res.locals.user = req.session.user;
    console.log(req.session.outwardno)
    collection.find({"outwardno":req.session.outwardno},function(err,docs){//find is used to find data form mongodb to frond end//
console.log(docs);
res.locals.data=docs;//data is any variable name//
    res.render('home');
});
    }
    else{
    res.redirect('/')
    }
});
//add row post
router.post('/chapter', function(req, res) {
    //console.log(req.body);
// collection.insert({"products":req.body}, function(err,docs){
 //  res.send(docs);
// });
});
//to get form
router.get('/form', function(req, res) {
  res.render('form');
});
//add table
router.get('/newtable', function(req, res) {
  res.render('newtable');
});
//to get table
router.get('/table', function(req, res) {
// collection.find({},function(err,docs){//find is used to find data form mongodb to frond end//
// console.log(docs);
// res.locals.data=docs;//data is any variable name//
res.render('table');
// });
});
//return //
router.get('/return',function(req,res)
{
res.render('return');
});

router.get('/logout', function(req, res){
  req.session.reset();
  res.redirect('/');
});
//delete button code code//
router.post('/remove', function(req, res){
var id=req.body.no;
collection.remove({"_id":id},function(err,docs)
{
res.send(docs);
});
});

//to insert data in form and save  in backend form//
router.post('/save',function(req,res){
	// var outwardno=req.body.outwardno;
	// console.log(outwardno);
	// var reason=req.body.reason;
	// console.log(reason);
	// var date=req.body.date;
	// console.log(date);
	// var time=req.body.time;
	// console.log(time);
	// var from=req.body.from;
	// console.log(e);
	// var to=req.body.to
	// console.log(f);
	// var g=req.body.vno;
	// console.log(g);
	// var h=req.body.vtype;
	// console.log(h);
	// var i=req.body.name1;
	// console.log(i);
	// var j=req.body.pno;
	// console.log(j);
	// var k=req.body.cno;
	// console.log(k);
	// var l=req.body.splperson;
	// console.log(l);
	// var m=req.body.remarks;
	// console.log(m);
	console.log(req.body)
	
	// console.log(req.body)
	collection.insert({"products":req.body,});	
	//collection.insert({"outwardno":req.body.outwardno,"reason":req.body.reason,"date":req.body.date,"time":req.body.time,"from":req.body.from,"to":req.body.to,"vno":req.body.vno,"vtype":req.body.vtype,"name1":req.body.name1,"pno":req.body.pno,"cno":req.body.cno,"splperson":req.body.splperson,"remarks":req.body.remarks});	
	res.redirect("/home");

});
//to insert login details in backend//
router.post('/login',function(req,res){
var a=req.body.username;
console.log(a);
var b=req.body.password;
console.log(b);
//collection1.insert({"username":a,"password":b});
collection1.findOne({"name":req.body.username,"password":req.body.password},function(err,docs){
if (!docs) {
console.log("mismatch");
res.render('index',{err:"invalid username(or)password"});
}
else if (docs) {
delete docs.password
req.session.user = docs;
console.log("success");
res.redirect('/home')
}
else{
console.log(err);
}
});
});

//get data
router.post('/edit',function(req,res){
var id=req.body.no;
console.log(id);
collection.find({"products.outwardno":id},function(err,data){
console.log(data);
res.send(data);
});
});
module.exports = router;

