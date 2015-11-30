#!/bin/bash
 
export PATH=/usr/local/bin:/path/to/node:/path/to/node_bin:/path/to/phantomjs:/path/to/jscoverage:$PATH;
 
mkdir -p build
npm install
grunt test
