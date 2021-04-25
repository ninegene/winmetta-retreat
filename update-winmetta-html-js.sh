#!/bin/bash
set -ex

cd winmetta-retreat-2021-04-16/
./build.sh

cd -
rsync -av --delete winmetta-retreat-2021-04-16/assets/ ./assets/
rsync -av --delete winmetta-retreat-2021-04-16/dist/ ./dist/
rsync -av --delete winmetta-retreat-2021-04-16/index.html ./index.html
