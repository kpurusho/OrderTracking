require('rootpath')();
var logger = require('log').logger;
var MongoClient = require('mongodb').MongoClient;
var MongoServer = require('mongodb').Server;


var DATABASE = function(servername, port){
	var that = {};
	var _db = {};	//private variable
	
	//private member function
	function setupInstance(){
		MongoClient.connect("mongodb://ordertrackinguser:adidasnike@ds031812.mongolab.com:31812/heroku_app36432204", function(err, db) {
				if (err) {
					 logger.error('unable to open mongo client instance');

				}
				else {
	  				_db = db;
				}
	  		});
	}

	//public member function
	that.instance = function(){
		return _db;
	}

	//call private member function
	setupInstance();

	//retun that instance to expose public members
	return that;

}('localhost',27017);



module.exports.db = DATABASE;
