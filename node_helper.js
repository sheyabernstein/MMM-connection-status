var NodeHelper = require("node_helper")
var os = require('os');

module.exports = NodeHelper.create({
	start: function() {
		console.log("MMM-connection-status started ...");
	},
	socketNotificationReceived: function(notification, payload) {
		if (notification == "GET_IP") {
			var networkInterfaces = os.networkInterfaces();
			var deviceIP = networkInterfaces['wlan0'].filter(addr => addr.family === 'IPv4')[0].address;

			this.sendSocketNotification('ip_address', deviceIP);
		}
	},
})
