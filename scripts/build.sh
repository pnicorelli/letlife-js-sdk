#!/bin/bash
DISTNAME="letlifeSDK-"
VERSION=`node -p -e 'JSON.parse(process.argv[1]).version' "$(cat ./package.json)"`
rm -rf ./dist/$DISTNAME*
./node_modules/browserify/bin/cmd.js ./index.js > ./dist/$DISTNAME$VERSION.js
./node_modules/browserify/bin/cmd.js ./index.js | ./node_modules/uglifyjs/bin/uglifyjs -mc > ./dist/$DISTNAME$VERSION.min.js
