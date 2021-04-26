#!/bin/bash
set -ex

# Make sure docker and act are installed
act -s NG_GITHUB_TOKEN=$NG_GITHUB_TOKEN -w .github/workflows/test-release.yml
