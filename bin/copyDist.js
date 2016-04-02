#! /usr/bin/env node
var fileExists = require('file-exists');
var copy = require("copy_file")
var sourceFile = './src/config/parameters.yaml.dist';
var destFile = './src/config/parameters.yaml';

if (!fileExists(destFile)) {
    console.log('file does not exist');
    copy(sourceFile, destFile, function(err) {});
}
else {
    console.log('file-exists');
}

