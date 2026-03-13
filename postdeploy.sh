#!/bin/bash

# Define the webroot
WEBROOT="public_html"

# Remove default PHP files (index.php, *.php)
find $WEBROOT -maxdepth 1 -type f -name "*.php" -exec rm -f {} \;

# Copy React build files into public_html
cp -r build/* $WEBROOT/

# Create .htaccess for React SPA routing
cat > $WEBROOT/.htaccess <<EOL
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
EOL

echo "React build deployed successfully to $WEBROOT."