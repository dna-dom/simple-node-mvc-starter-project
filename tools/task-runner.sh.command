#!/bin/bash
###################################
# Task Runner                     #
# simple-node-mvc-starter-project #
###################################

# To make this file runnable:
#     $ chmod +x tools/*.sh.command

banner="Simple Node Server Starter Project"
projectHome=$(realpath $0/../..)

setupTools() {
   cd $projectHome
   echo
   echo $banner
   echo $(echo $banner | sed s/./=/g)
   date
   pwd
   [ -d .git ] || { echo "Project must be in a git repository."; exit; }
   [ -d dist ] && git restore dist
   git pull --ff-only
   echo
   echo "Node.js:"
   which node || { echo "Need to install Node.js: https://nodejs.org"; exit; }
   node --version
   npm install --no-fund
   npm update --no-fund
   npm outdated
   echo
   }

setupTools
npm run dev
