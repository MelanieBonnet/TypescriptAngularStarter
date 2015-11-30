#!/bin/bash
 
export PHANTOMJS_BIN=/usr/local/bin/phantomjs
 
mkdir -p build
npm install
grunt test
