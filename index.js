var fs = require('fs');

module.exports.__express = function(filename, options, callback) {
  fs.readFile(filename, 'UTF8', function (err, data) {
		callback(null, data);
	});
}
