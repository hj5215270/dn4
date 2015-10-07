table = db.V01;

/* auth machine */
var tomcat_oauth2IP = "auth.networks.com";
var tomcat_oauth2Port = 8080;
var tomcat_updownloadIP = "auth.networks.com";
var tomcat_updownloadPort = 8080;
var tomcat_reportIP = "auth.networks.com";
var tomcat_reportPort = 8080;
var tomcat_captchaIP = "auth.networks.com";
var tomcat_captchaPort = 8080;
var erl_authIP = "auth.networks.com";
var erl_authPort = 8088;

var tomcat_statisticIP = "apis.networks.com";
var tomcat_statisticPort = 8080;
var tomcat_scadaIP = "apis.networks.com";
var tomcat_scadaPort = 8080;
var tomcat_siteIP = "apis.networks.com";
var tomcat_sitePort = 8080;
var tomcat_dtIP = "apis.networks.com";
var tomcat_dtPort = 8080;
var tomcat_lbsIP = "apis.networks.com";
var tomcat_lbsPort = 8080;
var tomcat_kvIP = "apis.networks.com";
var tomcat_kvPort = 8080;

var erl_oppIP = "opp.networks.com";
var erl_oppPort = 8091;

var erl_apIP = "ap.networks.com";
var erl_apPort = 8090;

var erl_apisIP = "apis.networks.com";
var erl_apisPort = 8089;



/*erl ivpn and openvpn project info */
var ivpnserverIP = "10.5.16.25";
var ivpnserverPort = 1194;

var mongodbIP = "mongodb.networks.com";
var mongodbPort = 27017;

var rabbitIP = "rabbitmq.networks.com";
var rabbitPort = 5672;

var nginxIP = "nginx.networks.com";
var nginxPort = 80;

var publicConfig = {
	apiServerIP: nginxIP,
	apiServerPort: nginxPort,
	timeoutHttp: 30,
	oauth2Server: tomcat_oauth2IP + ":" + tomcat_oauth2Port,
	fileServer: tomcat_updownloadIP + ":" + tomcat_updownloadPort + "/updownload/",
	dbConnNoAct: 3600,
	dbConnCheckInterval: 3600,
	taskStatusInterval: 10,
	mongodbHost: mongodbIP,
	mongodbPort: mongodbPort,
	mongodbUsername: "",
	mongodbPassword: "",
	mongodbWriteMode: "safe",
	mongodbReadMode: "master",
	mqHost: rabbitIP,
	mqPort: rabbitPort,
	mqUsername: "guest",
	mqPassword: "guest",
	logLevel: "debug"
};

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
	clients: [{
		name: "System",
		id: "17953450253259837552",
		clientSecret: "B9B7430D2E132164C9113D4234FAD1DD"
	}, {
		name: "Application",
		id: "17953450232432539879",
		clientSecret: "42672DC718CCB5D3E7D5E7D010C905BA"
	}, {
		name: "Browsers",
		id: "17953450251798098136",
		reliable: "public",
		clientSecret: "08E9EC6793345759456CB8BAE52615F3"
	}, {
		name: "AP",
		id: "17953450253315492492",
		clientSecret: "40AA731116537B502FF95E666D532584"
	}],
	servers: [{
		name: "Auth 1",
		type: 1,
		ip: erl_authIP,
		port: erl_authPort,
		path: ""
	}, {
		name: "Erlang 2",
		type: 2,
		ip: erl_apisIP,
		port: erl_apisPort,
		path: ""
	}, {
		name: "AP 1",
		type: 9,
		ip: erl_oppIP,
		port: erl_oppPort,
		path: ""
	}, {
		name: "Site 1",
		type: 3,
		ip: tomcat_siteIP,
		port: tomcat_sitePort,
		path: "site/"
	}, {
		/*	name: "Customer 1",
		type: 4,
		ip: tomcatIP,
		port: tomcatPort,
		path: "customer/"
	}, {
		name: "Document 1",
		type: 5,
		ip: tomcatIP,
		port: tomcatPort,
		path: "document/"
	}, {*/
		name: "Report 1",
		type: 6,
		ip: tomcat_reportIP,
		port: tomcat_reportPort,
		path: "report/"
	}, {
		name: "Captcha 1",
		type: 8,
		ip: tomcat_captchaIP,
		port: tomcat_captchaPort,
		path: "captcha/"
	}, {
		name: "Statistic 1",
		type: 7,
		ip: tomcat_statisticIP,
		port: tomcat_statisticPort,
		path: "statistic/"
	}, {
		name: "scada 1",
		type: 10,
		ip: tomcat_scadaIP,
		port: tomcat_scadaPort,
		path: "scada/"
	}, {
		name: "DT 1",
		type: 11,
		ip: tomcat_dtIP,
		port: tomcat_dtPort,
		path: "devicetouch/"
	}, {
		name: "LBS 1",
		type: 12,
		ip: tomcat_lbsIP,
		port: tomcat_lbsPort,
		path: "lbs/"
	}, {
		name: "OAuth2",
		type: 13,
		ip: tomcat_oauth2IP,
		port: tomcat_oauth2Port,
		path: "oauth2/"
	}, {
		name: "KV_STORAGE 1",
		type: 14,
		ip: tomcat_kvIP,
		port: tomcat_kvPort,
		path: "kv/"
	}],
	viewApps: [
		["systemOverview", 1, "overview", "./system", 1],
		["userList", 2, "list", "./system/user/table", 1],
		["roleList", 3, "list", "./system/role/table", 1],

		["accountList", 4, "list", "./apps/accountList", 1],
		["systemList", 5, "list", "./apps/systemList", 1],
		["tagList", 6, "list", "./system/tag/table", 1],
		["deviceList", 7, "list", "./device/mydevice/table", 0],
		["deviceOverview", 7, "overview", "./device/mydevice/overview", 1],
		["siteList", 8, "list", "./site/mysite/table", 0],
		["siteGis", 8, "gis", "./site/mysite/gis", 0],
		["siteOverview", 8, "overview", "./site/mysite/overview", 1],
		["siteScada", 8, "overview", "./site/mysite/scada/scadaview", 0],
		["modelOverview", 9, "overview", "./device/mymodel/overview", 1],
		["docList", 10, "list", "./system/doc/table", 1],
		["customerList", 11, "list", "./system/customer/table", 0],
		["customerGis", 11, "gis", "./system/customer/gis", 0],
		["customerOverview", 11, "overview", "./system/customer/overview", 1],
		["reportList", 12, "list", "./apps/reportList", 1],
		["dataList", 13, "list", "./apps/dataList", 1],
		["onlineList", 14, "list", "./apps/onlineList", 1],
		["trafficList", 15, "list", "./apps/trafficList", 1],
		["siteModelList", 16, "list", "./site/model/table", 1],
		["alarmList", 17, "list", "./apps/alarmList", 0],
		["alarmGis", 17, "gis", "./apps/alarmGis", 0],
		["alarmOverview", 17, "overview", "./apps/alarmOverview", 1],
		["logList", 18, "list", "./notice/log/log", 1],
		["taskList", 19, "list", "./apps/taskList", 1],
		["dsOverview", 20, "overview", "./apps/dsOverview", 1],
		["dtList", 21, "list", "./apps/dtList", 1],
		["configList", 22, "list", "./apps/configList", 1],
		["upgradeList", 23, "list", "./apps/upgradeList", 1],
		["controlList", 24, "list", "./apps/controlList", 1],
		["plcList", 25, "list", "./device/mycontroller/table", 0],
		["plcOverview", 25, "overview", "./device/mycontroller/overview", 1]
	],
	appHome: "http://127.0.0.1/apps/",
	appRoot: "/usr/local/apache-tomcat-6.0.33/webapps/"


};


var apiConfig = {
	port: 8089,
	clientId: "17953450253259837552",
	clientSecret: "B9B7430D2E132164C9113D4234FAD1DD",
	logFile: "./logs/dn_apis.log",
	cellWebsite: "google", // "opencellid",
	googleCellUrl: "http://www.google.com/loc/json",
	opencellidCellUrl: "http://www.opencellid.org/cell/get",
	trafficStatHour: 16,
	trafficSendVarID: "300011",
	trafficRecvVarID: "300009",
	taskInformInterval: 300,
	taskWaitingTimeout: 120,
	channelStatusInterval: 60,
	vpnRoot: "/etc/openvpn/",
	userIPFrom: "10.240.0.2",
	userIPTo: "10.240.31.254",
	vpnServerVirtualIP: "10.240.0.1",
	vpnServerIP: "10.5.3.140",
	vpnPort: 20004,
	vpnProto: "udp", // "tcp"
	vpnRoute: "",
	vpnConsolePort: 1194, // 10000
	vpnServerRespTimeout: 1000,
	consumers: [{
		exchange: "dn.exchange.resource",
		queue: "dn.apis.resource",
		keys: ["dn.key.resource.add.#", "dn.key.resource.delete.#"],
		module: "amqp_consumer",
		count: 10
	}, {
		exchange: "dn.exchange.task",
		queue: "dn.apis.task",
		keys: ["dn.key.task.update.#", "dn.key.task.add.#"],
		module: "amqp_consumer",
		count: 10
	}, {
		exchange: "dn.exchange.alarm",
		queue: "dn.apis.alarm",
		keys: ["dn.key.alarm.add.#"],
		module: "amqp_consumer",
		count: 2
	}, {
		exchange: "dn.exchange.user",
		queue: "dn.apis.user",
		keys: ["dn.key.user.logout"],
		module: "amqp_consumer"
	}]

};

// captcha:{}
// customer:{clientId, clientSecret}
// document:{clientId, clientSecret}
// file: {clientId, clientSecret}
// report: {clientId, clientSecret}
// site: {clientId, clientSecret}
// oauth2: {}
// mailSMSTLV:{modemId, modemComPort, modemBaudrate, modemManufacturer, modemModel,
//                         mailUsername, mailPassword, smtpServer, smtpAuth, DNdomain}

var siteConfig = {
	hostUrl: "",
	apUrl: "http://" + publicConfig.apiServerIP + ":" + publicConfig.apiServerPort + "/papi/devices/dynamic",
	taskUrl: "http://" + publicConfig.apiServerIP + ":" + publicConfig.apiServerPort + "/api2/tasks",
	oauth2RedirectUrl: "",
	clientId: "17953450232432539879",
	clientSecret: "42672DC718CCB5D3E7D5E7D010C905BA",
	verboseSite: "{\"oid\":1,\"_id\":1,\"name\":1,\"online\":1,\"address\":5,\"businessState\":50,\"location\":3,\"contact\":10,\"icon\":2,\"descriptions\":5,\"pics\":5,\"views\":4,\"owner\":50,\"createTime\":50,\"updateTime\":50}",
	verboseDevice: "{\"oid\":1,\"_id\":1,\"online\":1,\"plcId\":1,\"sensorId\":1,\"maxPlcId\":2,\"maxSensorId\":2,\"timezone\":2,\"name\":1,\"model\":2,\"mobileNumber\":2,\"serialNumber\":3,\"siteName\":3,\"siteId\":3,\"modelId\":3,\"vendorId\":3,\"priIp\":4,\"priPort\":4,\"pubIp\":4,\"pubPort\":4,\"syncState\":5,\"config\":10,\"info\":15,\"deviceConfig\":30,\"address\":5,\"businessState\":50,\"owner\":50,\"createTime\":50,\"updateTime\":50}",
	verboseModel: "{\"oid\":1,\"_id\":1,\"name\":1,\"model\":1,\"isGateway\":2,\"accessProto\":3,\"firmwareProto\":4,\"configFileId\":4,\"sensorType\":4,\"ioType\":4,\"plcTypeId\":4,\"delete\":91,\"portInfo\":91,\"varInfo\":92,\"icon\":2,\"descriptions\":2,\"pics\":2,\"views\":2,\"owner\":50,\"createTime\":50,\"updateTime\":50}",
	verbosePolicy: "{\"oid\":1,\"_id\":1,\"policyName\":1,\"model\":1,\"sourcePolicy\":50,\"operatorId\":30,\"deviceId\":50,\"createTime\":50,\"updateTime\":50}",
	verboseMachine: "{\"oid\":1,\"_id\":1,\"name\":1,\"plcId\":1,\"gatewayId\":1,\"sensorId\":1,\"model\":2,\"system\":2,\"timezone\":2,\"serialNumber\":3,\"siteName\":3,\"siteId\":3,\"modelId\":3,\"machineConfig\":30,\"vendorId\":3,\"owner\":50,\"createTime\":50,\"updateTime\":50}",
	siteConstant: {
		"nameLengthLimit": 30,
		"batchAddSizeLimit": 1000
	},
	lbsQueueName: "lbsQueue",
	lbsApi: {
		"cell": "http://" + nginxIP + ":" + nginxPort + "/api2/cell_location",
		"cdma": "http://" + nginxIP + ":" + nginxPort + "/api2/cdma_location"
	}
};

var oauth2Config = {
	hostUrl: "",
	validateUrl: "http://" + publicConfig.apiServerIP + ":" + publicConfig.apiServerPort + "/papi/validate",
	authenticateUrl: "http://" + publicConfig.apiServerIP + ":" + publicConfig.apiServerPort + "/papi/authenticate",
	autheInfoUrl: "http://" + publicConfig.apiServerIP + ":" + publicConfig.apiServerPort + "/papi/oauth2",
	expiresIn: 3600,
	refreshExpiresIn: 1296000,
	codeExpiresIn: 20000000
};

var captchaConfig = {

};

var customerConfig = {
	hostUrl: "",
	oauth2RedirectUrl: "",
	clientId: "17953450232432539879",
	clientSecret: "42672DC718CCB5D3E7D5E7D010C905BA",
	verboseCustomer: "{\"oid\":1,\"_id\":1,\"name\":1,\"phone\":3,\"address\":2,\"website\":2,\"email\":2,\"contact\":2,\"owner\":50,\"createTime\":50,\"updateTime\":50,\"siteIdList\":50}"
};

var documentConfig = {
	hostUrl: "",
	oauth2RedirectUrl: "",
	clientId: "17953450232432539879",
	clientSecret: "42672DC718CCB5D3E7D5E7D010C905BA",
	verboseDocument: "{\"oid\":1,\"_id\":1,\"name\":1,\"type\":3,\"belong\":50,\"owner\":50,\"createTime\":50,\"updateTime\":50,\"createrId\":50,\"createrName\":50,\"chunkId\":60}"
};

var fileConfig = {
	hostUrl: "",
	validateUrl: "http://" + publicConfig.apiServerIP + ":" + publicConfig.apiServerPort + "/papi/validate",
	autheInfoUrl: "http://" + publicConfig.apiServerIP + ":" + publicConfig.apiServerPort + "/papi/oauth2",
	taskUrl: "http://" + publicConfig.apiServerIP + ":" + publicConfig.apiServerPort + "/api2/tasks",
	clientId: "17953450232432539879",
	clientSecret: "42672DC718CCB5D3E7D5E7D010C905BA",
	templateBatchAdd: "",
	template_batch_update: ""
};

var reportConfig = {
	hostUrl: "",
	validateUrl: "http://" + publicConfig.apiServerIP + ":" + publicConfig.apiServerPort + "/papi/validate",
	autheInfoUrl: "http://" + publicConfig.apiServerIP + ":" + publicConfig.apiServerPort + "/papi/oauth2",
	apUrl: "http://" + publicConfig.apiServerIP + ":" + publicConfig.apiServerPort + "/papi/devices/dynamic",
	taskUrl: "http://" + publicConfig.apiServerIP + ":" + publicConfig.apiServerPort + "/api2/tasks",
	clientId: "17953450232432539879",
	clientSecret: "42672DC718CCB5D3E7D5E7D010C905BA",
	reportConfig: {
		site: {
			apiUrl: "api/sites",
			reportType: 1,
			permissionId: 29,
			resourceType: 14
		},
		device: {
			apiUrl: "api/devices",
			reportType: 2,
			permissionId: 11,
			resourceType: 5
		},
		alarm: {
			apiUrl: "api/alarms",
			reportType: 3,
			permissionId: 49,
			resourceType: 0
		},
		online: {
			apiUrl: "api/online_stat",
			reportType: 4,
			permissionId: 11,
			resourceType: 0
		},
		tag: {
			apiUrl: "api/resource_tags"
		},
		trafficMonth: {
			apiUrl: "api/traffic_month",
			reportType: 5,
			permissionId: 73,
			resourceType: 0
		},
		trafficDaily: {
			apiUrl: "api/traffic_day",
			reportType: 6,
			permissionId: 73,
			resourceType: 0
		},
		behavLog: {
			apiUrl: "api2/behav_log",
			reportType: 7,
			permissionId: 39,
			resourceType: 0
		},
		commLog: {
			apiUrl: "api2/comm_log",
			reportType: 8,
			permissionId: 40,
			resourceType: 0
		},
		document: {
			apiUrl: "api/documents",
			reportType: 10,
			permissionId: 35,
			resourceType: 17
		},
		alarmRule: {
			apiUrl: "api/alarm_rules",
			reportType: 11,
			permissionId: 51,
			resourceType: 0
		},
		organization: {
			apiUrl: "api2/organizations",
			reportType: 12,
			permissionId: 3,
			resourceType: 1
		}
	}
};

var mailSMSTLVConfig = {
	smsGateway: "SMS_GATEWAY",
	smsQueueName: "smsQueue",
	smsModemId: "modem.com1",
	smsModemComPort: "COM1",
	smsModemBaudrate: "115200",
	smsModemManufacturer: "",
	smsModemModel: "6070",
	mailQueueName: "mailQueue",
	senderName: "devicecloud@inhand.com.cn",
	senderPassword: "ABC123",
	smtpServer: "smtp.exmail.qq.com",
	mailSmtpAuth: "true",
	deviceNetworkHostName: "http://g.inhandnetworks.com",
	tlvQueueName: "ovdpQueue"
};

var apConfig = {
	port: 8090,
	clientId: "17953450253315492492",
	clientSecret: "40AA731116537B502FF95E666D532584",
	logFile: "./logs/ap.log",
	ovdpPort: 20003,
	heartbeatInterval: 10
};

var oppConfig = {
	port: 8091,
	clientId: "17953450253315492492",
	clientSecret: "40AA731116537B502FF95E666D532584",
	logFile: "./logs/opp.log",
	heartbeatInterval: 10,
	ovdpVersion: "122", // 16
	platformVersion: "100", // 16
	consumers: [{
		exchange: "dn.exchange.task",
		queue: "dn.opp.task",
		keys: ["dn.key.task.add.#", "dn.key.task.delete.#"],
		module: "amqp_consumer",
		count: 10
	}, {
		exchange: "dn.exchange.ovdp",
		queue: "dn.opp.device",
		keys: ["dn.key.devices.operation", "dn.key.devices.unset"],
		module: "amqp_consumer"
	}, {
		exchange: "dn.exchange.node",
		queue: "dn.opp.node",
		keys: ["dn.key.node.ap"],
		module: "amqp_consumer"
	}]

};

var upgradeConfig = {
	port: 8092,
	clientId: "17953450253259837552",
	clientSecret: "B9B7430D2E132164C9113D4234FAD1DD",
	logFile: "./logs/upgrade.log",
	routerUpgradePorts: [20008, 20009, 20011],
	dtuUpgradePorts: [20010],
	ackTimeout: 120,
	maxRetries: 3

};

var ivpnConfig = {
	"clientId": "17953450253259837552",
	"clientSecret": "B9B7430D2E132164C9113D4234FAD1DD",
	"vpnConnected": "connectQueue",
	"vpnDisconnected": "disconnectQueue",
	"vpnManagementIP": "localhost",
	"vpnManagementPort": 7505,
	"vpnServerIp": ivpnserverIP,
	"vpnServerPort": ivpnserverPort,
	"openVpnCa": "-----BEGIN CERTIFICATE-----\nMIIEATCCA2qgAwIBAgIJANTNOt0kJjQCMA0GCSqGSIb3DQEBBQUAMIGyMQswCQYD\nVQQGEwJDTjELMAkGA1UECBMCU0MxEDAOBgNVBAcTB0NoZW5nZHUxGDAWBgNVBAoT\nD0luSGFuZCBOZXR3b3JrczEUMBIGA1UECxMLRGV2aWNlVG91Y2gxFDASBgNVBAMT\nC0RldmljZVRvdWNoMRQwEgYDVQQpEwtEZXZpY2VUb3VjaDEoMCYGCSqGSIb3DQEJ\nARYZZGV2aWNlY2xvdWRAaW5oYW5kLmNvbS5jbjAeFw0xMzExMDUxMTQ4NDdaFw0y\nMzExMDMxMTQ4NDdaMIGyMQswCQYDVQQGEwJDTjELMAkGA1UECBMCU0MxEDAOBgNV\nBAcTB0NoZW5nZHUxGDAWBgNVBAoTD0luSGFuZCBOZXR3b3JrczEUMBIGA1UECxML\nRGV2aWNlVG91Y2gxFDASBgNVBAMTC0RldmljZVRvdWNoMRQwEgYDVQQpEwtEZXZp\nY2VUb3VjaDEoMCYGCSqGSIb3DQEJARYZZGV2aWNlY2xvdWRAaW5oYW5kLmNvbS5j\nbjCBnzANBgkqhkiG9w0BAQEFAAOBjQAwgYkCgYEAqb8c6Yitw/8x/i0zRygTJxht\nPza9ZowqZ/lv39XNNXICufTbDj6Tvv2QFqdeVIvlpaFmokuG/OfLCBBUOHWpMba+\nDAFj1xAi5XvFWJP/qB7Z5weMwhO8q92AODBgrwcDQEh66KJjzgmOf8cf+7a2+wxZ\nxDk9CM6624jXINY2blUCAwEAAaOCARswggEXMB0GA1UdDgQWBBS5vTm1kUKUqZti\nOI/tyxKQ2up63zCB5wYDVR0jBIHfMIHcgBS5vTm1kUKUqZtiOI/tyxKQ2up636GB\nuKSBtTCBsjELMAkGA1UEBhMCQ04xCzAJBgNVBAgTAlNDMRAwDgYDVQQHEwdDaGVu\nZ2R1MRgwFgYDVQQKEw9JbkhhbmQgTmV0d29ya3MxFDASBgNVBAsTC0RldmljZVRv\ndWNoMRQwEgYDVQQDEwtEZXZpY2VUb3VjaDEUMBIGA1UEKRMLRGV2aWNlVG91Y2gx\nKDAmBgkqhkiG9w0BCQEWGWRldmljZWNsb3VkQGluaGFuZC5jb20uY26CCQDUzTrd\nJCY0AjAMBgNVHRMEBTADAQH/MA0GCSqGSIb3DQEBBQUAA4GBAC4QhGcKhLgXfF5l\noWXLUfOWWa+8aZ5y7iS6Hyyuofwj4Lq7aO+f3AzJ6qty33MC4x8+1Mdvr3j3Zn+6\njVZX9rK2sMcCV9FEmkyMZoFHm6YO33bIRPgvT2xKghYmMy01p4hCgLNjbOIwobNh\nCPDAlqEhoWxkekOOL6HGkoJBpfYP\n-----END CERTIFICATE-----"
};

// var ts = Math.round((new Date()).getTime() / 1000);
// var id = new ObjectId();

var lbsConfig = {
	hostUrl : "",
	oauth2RedirectUrl : "",
	clientId : "17953450232432539879",
	clientSecret : "42672DC718CCB5D3E7D5E7D010C905BA"
};

var kvConfig = {
	hostUrl: "",
	validateUrl: "http://" + nginxIP + ":" + nginxPort + "/papi/validate",
	autheInfoUrl: "http://" + nginxIP + ":" + nginxPort + "/papi/oauth2",
	apUrl: "http://" + nginxIP + ":" + nginxPort + "/papi/devices/dynamic",
	taskUrl: "http://" + nginxIP + ":" + nginxPort + "/api2/tasks",
	clientId: "17953450232432539879",
	clientSecret: "42672DC718CCB5D3E7D5E7D010C905BA"
};
// var ts = Math.round((new Date()).getTime() / 1000);
// var id = new ObjectId();


var count = table.count({});
// if (count == 0) {
table.insert({
	name: "public",
	config: publicConfig
});
table.insert({
	name: "auth",
	config: authConfig
});
table.insert({
	name: "api",
	config: apiConfig
});
table.insert({
	name: "site",
	config: siteConfig
});
table.insert({
	name: "oauth2",
	config: oauth2Config
});
table.insert({
	name: "captcha",
	config: captchaConfig
});
table.insert({
	name: "customer",
	config: customerConfig
});
table.insert({
	name: "document",
	config: documentConfig
});
table.insert({
	name: "file",
	config: fileConfig
});
table.insert({
	name: "report",
	config: reportConfig
});
table.insert({
	name: "mailSMSTLV",
	config: mailSMSTLVConfig
});
table.insert({
	name: "ap",
	config: apConfig
});
table.insert({
	name: "opp",
	config: oppConfig
});
table.insert({
	name: "upgrade",
	config: upgradeConfig
});
table.insert({
	name: "ivpn",
	config: ivpnConfig
});
table.insert({
	name: "lbs",
	config: lbsConfig
});
table.insert({
	name: "kv",
	config: kvConfig
});
// } else {
// name_of_dn_already_exists()
// }

// var filePath = "./" + versionName + ts;
// writeFile3(filePath, id);
