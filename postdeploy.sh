#!/bin/bash

# 1. Remove old public_html contents
rm -rf public_html/*

# 2. Copy the contents of build/ into public_html
cp -r build/* public_html/

# 3. Optional: ensure .htaccess exists for React SPA routing
cat > public_html/.htaccess <<EOL
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
EOL

echo "React build deployed to public_html successfully."