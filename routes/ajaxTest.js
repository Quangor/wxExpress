var express = require('express');
var router = express.Router();
var AV = require('leanengine');


router.post('/',function(req,res){
	var data = req.body;
	var name = data.name;
	var sex = data.sex;
	 res.json({status:200,message:'hello' + name,data:{
	 	age : 10
	 }});
	/*weixin.setConfig(function(weixinConfig){
		 
	});*/
});

module.exports = router;
