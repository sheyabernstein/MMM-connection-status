/* Magic Mirror
 * Module: MMM-connection-status
 *
 * By Sheya Bernstein https://github.com/sheyabernstein/MMM-connection-status
 * MIT Licensed.
 */

Module.register('MMM-connection-status', {

	// Default module config.
	defaults: {
		updateInterval: 1000 * 60, // every minute
		initialLoadDelay: 0,
		animationSpeed: 1000 * 0.25,
		connectedColor: "var(--color-text)",
		disconnectedColor: "var(--color-text)",
	},

  // Define required translations.
	getTranslations: function() {
		return {
			'en': 'translations/en.json',
			'es': 'translations/es.json',
			'fr': 'translations/fr.json',
			'fi': 'translations/fi.json',
			'id': 'translations/id.json',
			'it': 'translations/it.json',
		};
	},

	// Define start sequence.
	start: function() {
        Log.info("Starting module: " + this.name);
        // Loop infinitely
		this.loop();
	},

	// Override dom generator.
	getDom: function() {
		const wrapper = document.createElement('div');
		if (window.navigator.onLine) {
			wrapper.className = 'small';
			wrapper.style.color = this.config.connectedColor;
			wrapper.innerHTML = this.translate("INET_CONN_CONNECTED");
		} else {
			wrapper.className = 'normal bright';
			wrapper.style.color = this.config.disconnectedColor;
			wrapper.innerHTML = this.translate("INET_CONN_NOTCONNECTED");
		}

		return wrapper;
	},

	// Infinite loop
	loop: function() {
        const self = this;
		setTimeout(function() {
			setInterval(function() {
				// Refreshes the dom, using the getDom() function
				self.updateDom(self.config.animationSpeed);
			}, self.config.updateInterval); // Loop interval
		}, self.config.initialLoadDelay); // First delay
	}
});
