#!/bin/sh
rm -rf dist/
rollup --format=esm --file=dist/app.js src/app.js
cp src/*.html dist