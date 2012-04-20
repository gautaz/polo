var assert = require('assert');
var polo = require('polo');
var apps = polo();

apps.put({
	name: process.argv[2] || 'hello-test',
	port: parseInt(process.argv[3] || 5555, 10)
});

setTimeout(function() {
	process.exit(0);
}, 700);