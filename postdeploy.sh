#!/bin/bash

# Absolute path to your app webroot
WEBROOT="/home/master/apps/shewmaps/public_html"

# Remove default PHP index
rm -f $WEBROOT/index.php

# Copy React build contents
cp -r build/* $WEBROOT/

# Add SPA routing
cat > $WEBROOT/.htaccess <<EOL
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
EOL

echo "React build deployed to $WEBROOT successfully."