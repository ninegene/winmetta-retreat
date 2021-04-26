#!/bin/bash
set -ex

npm version minor
git push --follow-tags
