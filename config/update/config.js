table = db.V01;


var authConfig = {
	port: 8088,
	clientId: "17953450253259837552",
	clientSecret: "B9B7430D2E132164C9113D4234FAD1DD",
	heartbeatInterval: 30,
	accessStatInterval: 86400,
	loginFailInterval: 3600,
	loginFail: 5,
	loginFailLockTime: 120,
	billStatDate: 1,
	billStatHour: 1,
	tokenCleanInterval: 300,
	DMDeviceLimit: 10000,
	licenseValid: 31536000,
	DTDeviceLimit: 10,
	mnesiaCluster: [], // "opp@10.5.3.113"
	clients: [{
		name: "ErlangModules",
		id: "17953450253259837552",
		clientSecret: "B9B7430D2E132164C9113D4234FAD1DD"
	}, {
		name: "JavaModules",
		id: "17953450232432539879",
		clientSecret: "42672DC718CCB5D3E7D5E7D010C905BA"
	}, {
		name: "Browsers",
		id: "17953450251798098136",
		clientSecret: "08E9EC6793345759456CB8BAE52615F3"
	}],
	servers: [{
		name: "Auth 1",
		type: 1,
		ip: "127.0.0.1",
		port: 8088,
		path: ""
	}, {
		name: "Erlang 2",
		type: 2,
		ip: "127.0.0.1",
		port: 8089,
		path: ""
	}, {
		name: "AP 1",
		type: 9,
		ip: "127.0.0.1",
		port: 8091,
		path: ""
	}, {
		name: "Site 1",
		type: 3,
		ip: "127.0.0.1",
		port: 8080,
		path: "site/"
	}, {
		name: "Customer 1",
		type: 4,
		ip: "127.0.0.1",
		port: 8080,
		path: "customer/"
	}, {
		name: "Document 1",
		type: 5,
		ip: "127.0.0.1",
		port: 8080,
		path: "document/"
	}, {
		name: "Report 1",
		type: 6,
		ip: "127.0.0.1",
		port: 8080,
		path: "report/"
	}, {
		name: "Captcha 1",
		type: 8,
		ip: "127.0.0.1",
		port: 8080,
		path: "captcha/"
	},{
		  ip : "10.5.16.203",
		  name : "Scada 1",
		  path : "scada/",
		  port : 8080,
		  type : 10
	}],
	logFile: "./logs/dn_auth.log",
	viewApps: [ // [name,subclass,type,url,default]
	["systemOverview", 1, "overview", "./system", 1],
		["userList", 2, "list", "./system/user/table-new", 1],
		["roleList", 3, "list", "./system/role/table", 1],

		["accountList", 4, "list", "http://10.5.3.113:8080/apps/accountList", 1],
		["systemList", 5, "list", "http://10.5.3.113:8080/apps/systemList", 1],
		["tagList", 6, "list", "http://10.5.3.113:8080/apps/tagList", 1],
		["deviceList", 7, "list", "./device/mydevice/table", 0],
		["deviceGis", 7, "gis", "./device/mydevice/gis", 0],
		["deviceOverview", 7, "overview", "./device/mydevice/overview", 1],
		["siteList", 8, "list", "./site/mysite/table", 0],
		["siteGis", 8, "gis", "./site/mysite/gis", 0],
		["siteOverview", 8, "overview", "./site/mysite/overview", 1],
		["modelList", 9, "list", "http://10.5.3.113:8080/apps/modelList", 0],
		["modelOverview", 9, "overview", "http://10.5.3.113:8080/apps/modelOverview", 1],
		["docList", 10, "list", "http://10.5.3.113:8080/apps/docList", 1],
		["customerList", 11, "list", "http://10.5.3.113:8080/apps/customerList", 0],
		["customerGis", 11, "gis", "http://10.5.3.113:8080/apps/customerGis", 0],
		["customerOverview", 11, "overview", "http://10.5.3.113:8080/apps/customerOverview", 1],
		["reportList", 12, "list", "http://10.5.3.113:8080/apps/reportList", 1],
		["dataList", 13, "list", "http://10.5.3.113:8080/apps/dataList", 1],
		["onlineList", 14, "list", "http://10.5.3.113:8080/apps/onlineList", 1],
		["trafficList", 15, "list", "http://10.5.3.113:8080/apps/trafficList", 1],
		["siteModelList", 16, "list", "http://10.5.3.113:8080/apps/siteModelList", 1],
		["alarmList", 17, "list", "http://10.5.3.113:8080/apps/alarmList", 0],
		["alarmGis", 17, "gis", "http://10.5.3.113:8080/apps/alarmGis", 0],
		["alarmOverview", 17, "overview", "http://10.5.3.113:8080/apps/alarmOverview", 1],
		["logList", 18, "list", "http://10.5.3.113:8080/apps/logList", 1],
		["taskList", 19, "list", "http://10.5.3.113:8080/apps/taskList", 1],
		["dsOverview", 20, "overview", "http://10.5.3.113:8080/apps/dsOverview", 1],
		["dtList", 21, "list", "http://10.5.3.113:8080/apps/dtList", 1],
		["configList", 22, "list", "http://10.5.3.113:8080/apps/configList", 1],
		["upgradeList", 23, "list", "http://10.5.3.113:8080/apps/upgradeList", 1],
		["controlList", 24, "list", "http://10.5.3.113:8080/apps/controlList", 1]
	],
	appHome: "http://10.5.3.113/apps/",
	appRoot: "/usr/local/apache-tomcat-6.0.33/webapps/"


};


table.update({
	name: "auth"
}, {
	$set, {
		config: authConfig
	}
});
// var filePath = "./" + versionName + ts;
// writeFile3(filePath, id);