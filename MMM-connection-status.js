/* Magic Mirror
 * Module: MMM-connection-status
 *
 * By Sheya Bernstein https://github.com/sheyabernstein/MMM-connection-status
 * MIT Licensed.
 */

Module.register('MMM-connection-status', {

	// Default module config.
	defaults: {
		updateInterval:  60 * 1000, // every minute
		initialLoadDelay: 0,
	},

  // Define required translations.
	getTranslations: function() {
    return {
      'en': 'translations/en.json',
      'id': 'translations/id.json'
    };
	},

	// Define start sequence.
	start: function() {
		Log.info('Starting module: ' + this.name);
		this.scheduleUpdate(this.config.initialLoadDelay);
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement('div');

		if (window.navigator.onLine) {
			wrapper.className = 'small';
			wrapper.innerHTML = this.translate("INET_CONN_CONNECTED");
		} else {
			wrapper.className = 'normal bright';
			wrapper.innerHTML = this.translate("INET_CONN_NOTCONNECTED");
		}

		return wrapper;
	},

	scheduleUpdate: function(delay, fn) {
		var nextLoad = this.config.updateInterval;
		if (typeof delay !== 'undefined' && delay >= 0) {
			nextLoad = delay;
		}

		var self = this
		setTimeout(function() {
			self.getDom();
		}, nextLoad);
	},
});
