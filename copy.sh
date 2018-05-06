#!/usr/bin/env bash

echo "preparing to move application to server directory"

echo "removing current server contents"
sudo rm -rf /var/www/html/*

echo "old files removed"

echo "preparing to build application"

echo "application built"
echo "preparing to copy new app to server directory"

sudo cp -r app/* /var/www/html/
echo "completed"