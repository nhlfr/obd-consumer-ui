#!/bin/bash

set -e

echo "Installing npm packages..."
npm install

echo "Installing bower packages..."
./node_modules/bower/bin/bower --config.interactive=false --allow-root install

echo "Compiling SASS..."
./node_modules/gulp/bin/gulp.js sass

exec ./node_modules/gulp/bin/gulp.js webserver
