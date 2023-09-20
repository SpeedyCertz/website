#!/bin/bash

# Navigate to your project directory
cd /home/ubuntu/website

# Install project dependencies
npm install

# Build the Next.js app
npm run build

# Copy the build files to your VPS server via SSH
scp -r ./build/* root@193.43.134.236:/var/www/html/index.nginx-debian.html
