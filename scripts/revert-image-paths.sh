#!/bin/bash
# Revert image paths back to /images/ for local development
find src -name "*.tsx" -exec sed -i '' 's|/osprey-cooling-website/images/|/images/|g' {} \;
echo "Image paths reverted for local dev"
