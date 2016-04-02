#! /usr/bin/env node
var fileExists = require('file-exists');
var copy = require("copy_file")
var sourceFile = './src/config/parameters.yaml.dist';
var destFile = './src/config/parameters.yaml';

if (!fileExists(destFile)) {
    copy(sourceFile, destFile, function(err) {});
}
