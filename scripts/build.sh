#!/bin/sh

mkdir -p docs
cd docs && rm -rf * && cd ..
yarn run poi
mv dist/* docs
cp src/404.html docs
echo 'dao.wyvernprotocol.com' > docs/CNAME
rmdir dist
