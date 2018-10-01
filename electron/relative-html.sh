#!/bin/bash
cd ./dist
rm -rf ./electron.html
sed -e 's/="\//=".\//g' index.html > ./electron.html
