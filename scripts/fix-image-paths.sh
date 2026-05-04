#!/bin/bash
# Prefix all /images/ paths with /osprey-cooling-website for GitHub Pages deployment
# Run this before production build

find src -name "*.tsx" -exec sed -i '' "s|'/images/|'/osprey-cooling-website/images/|g" {} \;
find src -name "*.tsx" -exec sed -i '' 's|"/images/|"/osprey-cooling-website/images/|g' {} \;
echo "Image paths prefixed for production"
