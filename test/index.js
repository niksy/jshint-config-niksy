var describe = require('mocha').describe;
var it = require('mocha').it;
var assert = require('assert');
var isPlainObject = require('lodash/isPlainObject');
var jshint = require('jshint').JSHINT;

function runJshint ( code, configFile ) {
	var linter = jshint(code.split('\n'), require(configFile));
	return jshint.errors;
}

describe('Default config', function () {

	var config = require('../');

	it('config object should be plain object', function () {
		assert.ok(isPlainObject(config));
	});

	it('linted code should return proper validation errors', function () {
		var errors = runJshint('console.log("foobar")\n', '../');
		assert.equal(errors[0].code, 'W109');
		assert.equal(errors[1].code, 'W033');
		assert.equal(errors[2].code, 'W117');
	});

});
