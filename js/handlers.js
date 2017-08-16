'use strict';

var Alexa = require('alexa-sdk');
var audioData = require('./audioAssets');
var constants = require('./constants');

var handlers = {
	'LaunchRequest': function () {
		controller.play.call(this);
	},
	'Unhandled' : function () {
		controller.notYetSupported.call(this);
	},
	'Tusch': function() {
		controller.play.call(this);
	},
	'AMAZON.PauseIntent': function() {
		controller.stop.call(this);
	},
	'AMAZON.ResumeIntent': function() {
		controller.notYetSupported.call(this);
	},
	'AMAZON.CancelIntent': function() {
		controller.stop.call(this);
	},
	'AMAZON.LoopOffIntent': function() {
		controller.notYetSupported.call(this);
	},
	'AMAZON.LoopOnIntent': function() {
		controller.notYetSupported.call(this);
	},
	'AMAZON.NextIntent': function() {
		controller.play.call(this);
	},
	'AMAZON.PreviousIntent': function() {
		controller.play.call(this);
	},
	'AMAZON.RepeatIntent': function() {
		controller.play.call(this);
	},
	'AMAZON.ShuffleOffIntent': function() {
		controller.notYetSupported.call(this);
	},
	'AMAZON.ShuffleOnIntent': function() {
		controller.notYetSupported.call(this);
	},
	'AMAZON.StartOverIntent': function() {
		controller.play.call(this);
	},
	'AMAZON.HelpIntent': function() {
		var message = 'Starten, um abzuspielen.';
		this.response.speak(message);
		this.emit(':responseReady');
	},
	'AMAZON.StopIntent': function() {
		controller.stop.call(this);
	}

};

module.exports = handlers;

var controller = function() {
	return {
		play: function() {
			var playBehavior = 'REPLACE_ALL',
				url = audioData.Tusch,
				token = "Tusch",
				offsetInMilliseconds = 0;
			this.response.audioPlayerPlay(playBehavior, url, token, null, offsetInMilliseconds);
			this.emit(':responseReady');

		},
		stop: function() {
			this.response.audioPlayerStop();
			this.emit(':responseReady');
		},
		notYetSupported: function() {
			var message = 'Das kann ich leider nicht.';
			this.response.speak(message);
			this.emit(':responseReady');
		}
	}
}();